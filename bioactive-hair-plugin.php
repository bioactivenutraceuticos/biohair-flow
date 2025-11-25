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
    // Enfileira CSS
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

    // Enfileira JS
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
add_action( 'wp_enqueue_scripts', 'bioactive_hair_enqueue_assets' );

function bioactive_hair_display_content_shortcode() {
    ob_start();
    ?>
    <div id="root"></div>
    <?php
    return ob_get_clean();
}
add_shortcode( 'bioactive_hair_app', 'bioactive_hair_display_content_shortcode' );
