import { __ } from "@wordpress/i18n";
import {
	CheckboxControl,
	RadioControl,
	TextControl,
	ToggleControl,
	SelectControl,
	PanelBody,
	Button,
	RangeControl,
	__experimentalBoxControl as DimensionControl,
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";

import {
	RichText,
	InspectorControls,
	useBlockProps,
	MediaUploadCheck,
	MediaUpload,
} from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const {
		content,
		checkboxField,
		radioField,
		textField,
		selectField,
		rangeNo,
		toggleField,
	} = attributes;

	function onChangeContent(newContent) {
		setAttributes({ content: newContent });
	}

	function onChangeCheckboxField(newValue) {
		setAttributes({ checkboxField: newValue });
	}

	function onChangeRadioField(newValue) {
		setAttributes({ radioField: newValue });
	}

	function onChangeTextField(newValue) {
		setAttributes({ textField: newValue });
	}

	function onChangeToggleField(newValue) {
		setAttributes({ toggleField: newValue });
	}

	function onChangeSelectField(newValue) {
		setAttributes({ selectField: newValue });
	}

	function onChangeRangeNo(newValue) {
		setAttributes({ rangeNo: newValue });
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings")}>
					<CheckboxControl
						label="Is author"
						help="Is the user a author or not?"
						checked={checkboxField}
						onChange={onChangeCheckboxField}
					/>

					<RadioControl
						label="Radio Field"
						selected={radioField}
						options={[
							{ label: "Yes", value: "yes" },
							{ label: "No", value: "no" },
						]}
						onChange={onChangeRadioField}
					/>

					<TextControl
						label="Text Field"
						help="Additional help text"
						value={textField}
						onChange={onChangeTextField}
					/>

					<ToggleControl
						label="Toggle Field"
						checked={toggleField}
						onChange={onChangeToggleField}
					/>

					<SelectControl
						label="Select Control"
						value={selectField}
						options={[
							{ value: "a", label: "Option A" },
							{ value: "b", label: "Option B" },
							{ value: "c", label: "Option C" },
						]}
						onChange={onChangeSelectField}
					/>
					<RangeControl
						label="Range"
						value={rangeNo}
						onChange={onChangeRangeNo}
						min={2}
						max={500}
					/>

					<DimensionControl
						label={__("Padding with DimensionControl")}
						onChange={(e) => console.log(e)}
						value={18}
					/>

					<BoxControl
						label={__("Padding with BoxControl")}
						onChange={(e) => console.log(e)}
						value={18}
					/>
				</PanelBody>
				<PanelBody
					title={__("Background settings", "image-selector-example")}
					initialOpen={true}
				>
					<div className="wp-block-image-selector-example-image">
						<MediaUploadCheck>
							<MediaUpload
								title={__("Background image", "image-selector-example")}
								render={({ open }) => <Button onClick={open}>Button</Button>}
							/>
						</MediaUploadCheck>
						<MediaUploadCheck>
							<MediaUpload
								title={__("Background image", "image-selector-example")}
								render={({ open }) => (
									<Button onClick={open}>
										{__("Replace background image", "image-selector-example")}
									</Button>
								)}
							/>
						</MediaUploadCheck>

						<MediaUploadCheck>
							<Button>
								{__("Remove background image", "image-selector-example")}
							</Button>
						</MediaUploadCheck>
					</div>
				</PanelBody>
			</InspectorControls>

			<RichText
				{...blockProps}
				key="editable"
				tagName="p"
				onChange={onChangeContent}
				value={content}
			/>
			<div {...blockProps}>
				<RichText.Content value={content} tagName="p" />

				<h2>Inspector Control Fields</h2>
				<ul>
					<li>Checkbox Field: {checkboxField ? "Show" : "Hide"} </li>
					<li>Radio Field: {radioField}</li>
					<li>Text Field: {textField}</li>
					<li>Select Field: {selectField}</li>
					<li>Range Field: {rangeNo}</li>
					<li>Toggle Field:{toggleField ? "Show" : "Hide"}</li>
				</ul>
			</div>
		</>
	);
}
