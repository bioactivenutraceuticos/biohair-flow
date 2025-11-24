<?php
// Este script é executado pelo GitHub Actions no servidor para configurar o plugin.

// Define o caminho base do plugin
$plugin_base_path = __DIR__ . '/';
$plugin_main_file = $plugin_base_path . 'bioactive-hair-plugin.php';
$plugin_name = 'BioActive Hair Plugin';
$plugin_slug = 'bioactive-hair-plugin'; // Deve ser o nome da pasta do plugin

// Conteúdo do arquivo principal do plugin
$plugin_content = <<<EOT
<?php
/**
 * Plugin Name: BioActive Hair Plugin
 * Plugin URI: https://bioactivehair.com/
 * Description: Integra o conteúdo do projeto BioActive Hair gerado pelo Lovable.
 * Version: 1.0.0
 * Author: Sua Agência
 * Author URI: https://suaagencia.com/
 * License: GPL2
 */

// Garante que o script não seja acessado diretamente
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Define o caminho base do plugin
define( 'BIOACTIVE_HAIR_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
define( 'BIOACTIVE_HAIR_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

/**
 * Enfileira os estilos CSS do projeto.
 */
function bioactive_hair_enqueue_styles() {
    // Enfileira app.css
    wp_enqueue_style(
        'bioactive-hair-app-style',
        BIOACTIVE_HAIR_PLUGIN_URL . 'app.css',
        array(),
        filemtime( BIOACTIVE_HAIR_PLUGIN_PATH . 'app.css' )
    );

    // Enfileira index.css
    wp_enqueue_style(
        'bioactive-hair-index-style',
        BIOACTIVE_HAIR_PLUGIN_URL . 'index.css',
        array(),
        filemtime( BIOACTIVE_HAIR_PLUGIN_PATH . 'index.css' )
    );
}
add_action( 'wp_enqueue_scripts', 'bioactive_hair_enqueue_styles' );

/**
 * Registra um shortcode para exibir o conteúdo do index.html.
 * Uso: [bioactive_hair_content]
 */
function bioactive_hair_display_content_shortcode() {
    $html_content_path = BIOACTIVE_HAIR_PLUGIN_PATH . 'index.html';
    if ( file_exists( $html_content_path ) ) {
        // Retorna o conteúdo do index.html
        return file_get_contents( $html_content_path );
    }
    return '<p>Conteúdo BioActive Hair não encontrado.</p>';
}
add_shortcode( 'bioactive_hair_content', 'bioactive_hair_display_content_shortcode' );

// Opcional: Adicionar um menu de administração simples ou configurações
// function bioactive_hair_admin_menu() {
//     add_menu_page(
//         'BioActive Hair Settings',
//         'BioActive Hair',
//         'manage_options',
//         'bioactive-hair-settings',
//         'bioactive_hair_settings_page',
//         'dashicons-heart',
//         6
//     );
// }
// add_action( 'admin_menu', 'bioactive_hair_admin_menu' );

// function bioactive_hair_settings_page() {
//     echo '<div class="wrap"><h1>Configurações BioActive Hair</h1><p>Seu plugin está ativo e funcionando!</p><p>Use o shortcode <code>[bioactive_hair_content]</code> em qualquer página ou post para exibir o conteúdo.</p></div>';
// }

EOT;

// Verifica se o arquivo principal do plugin já existe
if ( ! file_exists( $plugin_main_file ) ) {
    // Se não existir, cria o arquivo com o conteúdo definido
    if ( file_put_contents( $plugin_main_file, $plugin_content ) ) {
        echo "Arquivo principal do plugin '{$plugin_main_file}' criado com sucesso.\n";
    } else {
        error_log("Erro: Não foi possível criar o arquivo principal do plugin '{$plugin_main_file}'. Verifique as permissões.");
        echo "Erro: Não foi possível criar o arquivo principal do plugin.\n";
        exit(1); // Indica falha
    }
} else {
    echo "Arquivo principal do plugin '{$plugin_main_file}' já existe. Nenhuma ação necessária.\n";
}

// Opcional: Copiar assets para uma pasta específica se necessário
// Exemplo: Se você tiver uma pasta 'assets' na raiz do seu projeto
// $source_assets_path = $plugin_base_path . 'assets';
// $dest_assets_path = $plugin_base_path . 'assets';
// if (is_dir($source_assets_path) && !is_dir($dest_assets_path)) {
//     if (shell_exec("cp -R {$source_assets_path} {$dest_assets_path}")) {
//         echo "Assets copiados com sucesso.\n";
//     } else {
//         error_log("Erro: Não foi possível copiar os assets.");
//         echo "Erro: Não foi possível copiar os assets.\n";
//     }
// }

?>
