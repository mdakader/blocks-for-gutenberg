<?php
/**
 * Plugin Name:       Easy Blocks For Gutenberg
 * Description:       Example static block scaffolded with Create Block tool.
 * Plugin URI: https://easyblocks.abdul-k.com/
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:      Md Abdul Kader
 * Author URI: https://abdul-k.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ebfg
 * Domain Path:       /languages
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function ebfg_block_init() {

	$blocks = [
		'header',
		'card',
		'service',
		'infobox',
		'flipbox',
		'gallery'
];
	foreach( $blocks as $block ) {
		register_block_type( plugin_dir_path( __FILE__ ) . 'build/blocks/' . $block );
	}
}
add_action( 'init', 'ebfg_block_init' );


function ebfg_block_enqueue_scripts() {
	$asset_file = require plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	wp_enqueue_style('fontawesome', 'https://use.fontawesome.com/releases/v5.8.1/css/all.css', '', '5.8.1', 'all');

	wp_enqueue_script( 'ebfg-block-main', plugins_url( '/build/index.js', __FILE__ ), $asset_file['dependencies'], 1.0, false);
}
add_action( 'enqueue_block_editor_assets', 'ebfg_block_enqueue_scripts');


// New Managing block categories custom_blocks_category
function ebfg_block_category($block_categories, $editor_context) {
	if (!empty($editor_context->post)) {
		array_push(
			$block_categories,
			array(
				'slug' => 'ebfg-block',
				'title' => __('Easy Blocks', 'ebfg'),
				'icon' => null,
			)
		);
	}
	return $block_categories;
}

add_filter('block_categories_all', 'ebfg_block_category', 10, 2);

///**
// * Adding a new (custom) block category.
// *
// * @param   array $block_categories                                Array of categories for block types.
// * @param   WP_Block_Editor_Context|string $block_editor_context   The current block editor context, or a string defining the context.
// */
//function ebfg_block_category( $block_categories, $block_editor_context ) {
//		// Check the context of this filter, return default if not in the post/page block editor.
//		// Alternatively, use this check to add custom categories to only the customizer or widget screens.
//		if ( ! ( $block_editor_context instanceof WP_Block_Editor_Context ) ) {
//				return $block_categories;
//		}
//
//		// You can add extra validation such as seeing which post type
//		// is used to only include categories in some post types.
//		// if ( in_array( $block_editor_context->post->post_type, ['post', 'my-post-type'] ) ) { ... }
//
//		return array_merge(
//				$block_categories,
//				[
//						[
//								'slug' => 'ebfg-block',
//								'title' => __('Easy Blocks', 'ebfg'),
//								'icon'  => 'wordpress', // Slug of a WordPress Dashicon or custom SVG
//						],
//				]
//		);
//}
//
//add_filter( 'block_categories_all', 'ebfg_block_category', 10, 2);
