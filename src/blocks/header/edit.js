import { __ } from "@wordpress/i18n";
import { TextControl, RangeControl } from "@wordpress/components";

// import { desktop } from "@wordpress/icons";
import {
	useBlockProps,
	ColorPalette,
	InspectorControls,
} from "@wordpress/block-editor";
import "./editor.scss";

export default function edit({ attributes, setAttributes }) {
	const onChangeBGColor = (hexColor) => {
		setAttributes({ bg_color: hexColor });
	};

	const onChangefonSize = (value) => {
		setAttributes({ font_size: value });
	};

	const onChangeTextColor = (hexColor) => {
		setAttributes({ text_color: hexColor });
	};

	const onChangeText = (value) => {
		setAttributes({ message: value });
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls key="setting">
				<div id="gutenpride-controls">
					<fieldset>
						<legend className="blocks-base-control__label">
							{__("Background color", "gutenpride")}
						</legend>
						<ColorPalette // Element Tag for Gutenberg standard colour selector
							onChange={onChangeBGColor} // onChange event callback
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{__("Text color", "gutenpride")}
						</legend>
						<ColorPalette // Element Tag for Gutenberg standard colour selector
							onChange={onChangeTextColor} // onChange event callback
						/>
					</fieldset>
				</div>
				<RangeControl
					label="Font size"
					value={attributes.font_size}
					onChange={onChangefonSize}
					min={2}
					max={100}
				/>
			</InspectorControls>
			<TextControl
				value={attributes.message}
				onChange={() => {
					onChangeText();
					onChangefonSize();
				}}
				style={{
					backgroundColor: attributes.bg_color,
					color: attributes.text_color,
					fontSize: attributes.font_size ? `${attributes.font_size}px` : null,
				}}
			/>
		</div>
	);
}
