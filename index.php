<?php
 
/*
Plugin Name: Meraki Blocks
Description: Gutenberg Blocks for Meraki Website.
Version: 1.0.0
Author: TW Werbeagenten Heidelberg GmbH
*/
 
if(! defined('ABSPATH')) exit; //Exit if accessed directly

define('MY_PLUGIN_PATH',plugin_dir_url(__FILE__));
 
function enqueue_all(){
   wp_register_style( 'swiper_css', 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css' );
   wp_register_script( 'swiper_js', 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js', null, null, true );

   wp_enqueue_script('enqueue-all', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-element', 'wp-editor', 'wp-blocks', 'swiper_js'));
   // wp_enqueue_script('enqueue-all', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-element', 'wp-editor', 'wp-blocks'));
   wp_enqueue_style('enqueue-all-styles', plugin_dir_url(__FILE__) . 'build/index.css', array('swiper_css'));
   // wp_enqueue_style('enqueue-all-styles', plugin_dir_url(__FILE__) . 'build/index.css');
}

function enqueue_frontend(){
   wp_enqueue_script('enqueue-all', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element', 'wp-editor', 'wp-blocks'));
   wp_enqueue_style('enqueue-all-styles', plugin_dir_url(__FILE__) . 'build/frontend.css');
}

// Editor & Frontend
add_action('enqueue_block_assets', 'enqueue_all');
// Just Editor
// add_action('enqueue_block_editor_assets', 'enqueue_all');
// Just Frontend
// add_action('wp_enqueue_scripts', 'enqueue_frontend');


//------Including Dynamic Blocks--------
include 'src/blocks/dynamic/dynamic.php';
include 'src/blocks/projekte-feed/projekte-feed.php';
include 'src/blocks/masonry-feed/masonry-feed.php';
// include 'src/blocks/jobs-accordion/jobs-accordion.php';


