import { __ } from "@wordpress/i18n";
import {
	TextControl,
	__experimentalUnitControl as UnitControl,
	__experimentalDimensionControl as DimensionControl,
	__experimentalBoxControl as BoxControl,
	RangeControl,
} from "@wordpress/components";

import { useState } from "@wordpress/element";
import { desktop } from "@wordpress/icons";
import {
	useBlockProps,
	ColorPalette,
	InspectorControls,
} from "@wordpress/block-editor";
import "./editor.scss";
import { partialRight } from "lodash";

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

	const [value, setValue] = useState("10px");

	const units = [
		{ value: "px", label: "px", default: 0 },
		{ value: "%", label: "%", default: 10 },
		{ value: "em", label: "em", default: 0 },
	];
	const updateSpacing = (dimension, size, device = "") => {
		setAttributes({
			[`${dimension}${device}`]: size,
		});
	};

	const [values, setValues] = useState({
		top: "50px",
		left: "10%",
		right: "10%",
		bottom: "50px",
	});

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
				<UnitControl onChange={setValue} value={value} units={units} />
				<DimensionControl
					label={__("Padding")}
					icon={desktop}
					onChange={partialRight(updateSpacing, "paddingSize")}
					value={attributes.paddingSize}
				/>
				<BoxControl
					label={__("Padding")}
					icon={"desktop"}
					values={values}
					onChange={(value) => console.log(value)}
					// onChange={(nextValues) => setValues(nextValues)}
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
