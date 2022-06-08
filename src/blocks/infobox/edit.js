/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	RichText,
	InspectorControls,
	ColorPalette,
	MediaUpload,
} from "@wordpress/block-editor";

import {
	PanelBody,
	SelectControl,
	IconButton,
	RangeControl,
} from "@wordpress/components";

import IconSelector from "./components/IconSelector";

import InfoboxIcon from "./components/Icon";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: "infobox-wrapper",
	});

	const { icon, iconimgPosition, source_type, iconSize } = attributes;

	// custom functions
	function onChangeIcon(newIcon) {
		setAttributes({ icon: newIcon });
	}

	function onChangeIconImagePosition(newIconImagePosition) {
		setAttributes({ iconimgPosition: newIconImagePosition });
	}

	function onChangeSourceType(newSourceType) {
		setAttributes({ source_type: newSourceType });
	}

	function onChangeIconSize(newIconSize) {
		setAttributes({ iconSize: newIconSize });
	}
	//console.log(IconSelector.handleChange);
	return (
		<>
			<InspectorControls style={{ marginBottom: "40px" }}>
				<PanelBody title={"Image/Icon"}>
					<SelectControl
						label={__("Icon/Image Position", "alamin-gutenberg")}
						value={iconimgPosition}
						onChange={(value) => setAttributes({ iconimgPosition: value })}
						options={[
							{
								value: "above-title",
								label: __("Above Title", "alamin-gutenberg"),
							},
							{
								value: "left-title",
								label: __("Left of Title", "alamin-gutenberg"),
							},
							{
								value: "left",
								label: __("Left of Text and Title", "alamin-gutenberg"),
							},
						]}
					/>
					<SelectControl
						label={__("Select Source", "alamin-gutenberg")}
						value={source_type}
						onChange={(value) => setAttributes({ source_type: value })}
						options={[
							{ value: "icon", label: __("Icon", "alamin-gutenberg") },
							{ value: "image", label: __("Image", "alamin-gutenberg") },
						]}
					/>
					<IconSelector
						label={__("Select Icon", "alamin-gutenberg")}
						value={icon}
						onChange={(value) => setAttributes({ icon: value })}
					/>
					<RangeControl
						label={__("Icon Size", "alamin-gutenberg")}
						value={iconSize}
						onChange={(value) => setAttributes({ iconSize: value })}
						min={10}
						max={300}
						beforeIcon=""
						allowReset
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className="infobox-text">
					<InfoboxIcon attributes={attributes} />
					{__("Gutenberg Infobox – hello from the editor!", "alamin-gutenberg")}
				</div>
			</div>
		</>
	);
}
