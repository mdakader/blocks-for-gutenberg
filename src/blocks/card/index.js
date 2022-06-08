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
	content: {
		type: "string",
		source: "html",
		selector: "p",
	},
	checkboxField: {
		type: "boolean",
		default: true,
	},
	radioField: {
		type: "string",
		default: "yes",
	},
	textField: {
		type: "string",
		default: "Hello world!",
	},
	toggleField: {
		type: "boolean",
		default: true,
	},
	formToggle: {
		type: "boolean",
		default: true,
	},
	selectField: {
		type: "string",
		default: "a",
	},

	bgImageId: {
		type: "number",
	},
	rangeNo: {
		type: "nubmer",
		default: 10,
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
