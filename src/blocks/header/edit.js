import { __ } from "@wordpress/i18n";
import { TextControl } from "@wordpress/components";

import {
	useBlockProps,
	ColorPalette,
	InspectorControls,
} from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const onChangeBGColor = (hexColor) => {
		setAttributes({ bg_color: hexColor });
	};

	const onChangeTextColor = (hexColor) => {
		setAttributes({ text_color: hexColor });
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
			</InspectorControls>
			<TextControl
				value={attributes.message}
				onChange={(val) => setAttributes({ message: val })}
				style={{
					backgroundColor: attributes.bg_color,
					color: attributes.text_color,
				}}
			/>
		</div>
	);
}
