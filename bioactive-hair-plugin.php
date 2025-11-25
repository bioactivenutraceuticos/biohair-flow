<?php
/**
 * Plugin Name: BioActive Hair Plugin
 * Plugin URI: https://bioactivehair.com/
 * Description: Integra o conteúdo do projeto BioActive Hair gerado pelo Lovable.
 * Version: 1.0.1
 * Author: Sua Agência
 * License: GPL2
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

define( 'BIOACTIVE_HAIR_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
define( 'BIOACTIVE_HAIR_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

function bioactive_hair_enqueue_assets() {
    $version = '1.0.1'; // Atualize este número quando fizer deploy de uma nova versão
    
    // Carrega CSS principal com prioridade alta
    $css_file = BIOACTIVE_HAIR_PLUGIN_PATH . 'assets/main.css';
    if ( file_exists( $css_file ) ) {
        wp_enqueue_style(
            'bioactive-hair-main',
            BIOACTIVE_HAIR_PLUGIN_URL . 'assets/main.css',
            array(),
            $version,
            'all'
        );
        
        // Adiciona CSS inline para sobrescrever estilos do tema
        $custom_css = "
            #root * {
                font-family: 'Inter', sans-serif !important;
            }
            #root h1, #root h2, #root h3, #root h4, #root h5, #root h6 {
                font-family: 'Poppins', sans-serif !important;
                font-weight: 900 !important;
            }
            #root button {
                box-shadow: none !important;
            }
        ";
        wp_add_inline_style( 'bioactive-hair-main', $custom_css );
    }
    
    // Carrega JS principal
    $js_file = BIOACTIVE_HAIR_PLUGIN_PATH . 'assets/main.js';
    if ( file_exists( $js_file ) ) {
        wp_enqueue_script(
            'bioactive-hair-main',
            BIOACTIVE_HAIR_PLUGIN_URL . 'assets/main.js',
            array(),
            $version,
            true
        );
    }
}
add_action( 'wp_enqueue_scripts', 'bioactive_hair_enqueue_assets' );

function bioactive_hair_display_content_shortcode( $atts ) {
    // Permite passar a página como parâmetro: [bioactive_hair_app page="contato"]
    $atts = shortcode_atts( array(
        'page' => 'home', // página padrão
    ), $atts );
    
    ob_start();
    ?>
    <style>
        /* Remove laterais brancas e faz o app ocupar toda a largura */
        .bioactive-hair-container {
            width: 100vw;
            position: relative;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
            max-width: 100vw;
        }
        
        /* Remove padding do Elementor/WordPress */
        .elementor-widget-container {
            padding: 0 !important;
            margin: 0 !important;
        }
        
        /* Garante que o root ocupe toda a largura */
        #root {
            width: 100%;
            min-height: 100vh;
        }
    </style>
    <div class="bioactive-hair-container">
        <div id="root" data-page="<?php echo esc_attr( $atts['page'] ); ?>"></div>
    </div>
    <script>
        // Passa a página para o React via data attribute
        window.BIOACTIVE_INITIAL_PAGE = '<?php echo esc_js( $atts['page'] ); ?>';
    </script>
    <?php
    return ob_get_clean();
}
add_shortcode( 'bioactive_hair_app', 'bioactive_hair_display_content_shortcode' );
