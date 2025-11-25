<?php
/**
 * Plugin Name: BioActive Hair Plugin
 * Plugin URI: https://bioactivehair.com/
 * Description: Integra o conteúdo do projeto BioActive Hair gerado pelo Lovable.
 * Version: 1.0.0
 * Author: Sua Agência
 * License: GPL2
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

define( 'BIOACTIVE_HAIR_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
define( 'BIOACTIVE_HAIR_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

function bioactive_hair_enqueue_assets() {
    // Lê o manifest do Vite para pegar os nomes corretos dos arquivos
    $manifest_path = BIOACTIVE_HAIR_PLUGIN_PATH . '.vite/manifest.json';
    
    if ( file_exists( $manifest_path ) ) {
        $manifest = json_decode( file_get_contents( $manifest_path ), true );
        
        // Enfileira o arquivo principal JS
        if ( isset( $manifest['index.html']['file'] ) ) {
            wp_enqueue_script(
                'bioactive-hair-main',
                BIOACTIVE_HAIR_PLUGIN_URL . $manifest['index.html']['file'],
                array(),
                null,
                true
            );
        }
        
        // Enfileira CSS se existir
        if ( isset( $manifest['index.html']['css'] ) ) {
            foreach ( $manifest['index.html']['css'] as $css_file ) {
                wp_enqueue_style(
                    'bioactive-hair-' . sanitize_title( $css_file ),
                    BIOACTIVE_HAIR_PLUGIN_URL . $css_file,
                    array(),
                    null
                );
            }
        }
    } else {
        // Fallback: carrega todos os arquivos CSS e JS
        $css_files = glob( BIOACTIVE_HAIR_PLUGIN_PATH . 'assets/*.css' );
        if ( $css_files ) {
            foreach ( $css_files as $css_file ) {
                $css_name = basename( $css_file );
                wp_enqueue_style(
                    'bioactive-hair-' . sanitize_title( $css_name ),
                    BIOACTIVE_HAIR_PLUGIN_URL . 'assets/' . $css_name,
                    array(),
                    filemtime( $css_file )
                );
            }
        }

        $js_files = glob( BIOACTIVE_HAIR_PLUGIN_PATH . 'assets/*.js' );
        if ( $js_files ) {
            foreach ( $js_files as $js_file ) {
                $js_name = basename( $js_file );
                wp_enqueue_script(
                    'bioactive-hair-' . sanitize_title( $js_name ),
                    BIOACTIVE_HAIR_PLUGIN_URL . 'assets/' . $js_name,
                    array(),
                    filemtime( $js_file ),
                    true
                );
            }
        }
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
