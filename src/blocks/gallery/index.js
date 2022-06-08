/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

import metadata from "./block.json";

const { title, name } = metadata;

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import edit from "./edit";
import save from "./save";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

const attributes = {
	message: {
		type: "string",
		source: "text",
		selector: "div",
		default: "Hello world!",
	},
	align: {
		type: "string",
		default: "none",
	},
	bg_color: {
		type: "string",
	},
	text_color: {
		type: "string",
	},
	img_url: {
		type: "string",
		source: "attribute",
		selector: "img",
		attribute: "src",
	},
	title: {
		type: "string",
	},
	size: {
		enum: ["large", "small"],
	},
	mediaID: {
		type: "number",
	},
	mediaURL: {
		type: "string",
		source: "attribute",
		selector: "img",
		attribute: "src",
	},
	body: {
		type: "array",
		source: "children",
		selector: ".callout-body",
	},
	alignment: {
		type: "string",
	},
	images: {
		type: "array",
		default: [],
	},
	supports: {
		color: {
			text: true,
			link: true,
			background: true,
		},
	},
};

registerBlockType(name, {
	title,

	attributes,
	/**
	 * @see ./edit.js
	 */
	edit,
	/**
	 * @see ./save.js
	 */
	save,
});
