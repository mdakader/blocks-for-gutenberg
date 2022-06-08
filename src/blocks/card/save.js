import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		content,
		checkboxField,
		radioField,
		textField,
		toggleField,
		selectField,
		rangeNo,
		formToggle,
	} = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<RichText.Content value={content} tagName="p" />

			<h2>Inspector Control Fields</h2>
			<ul>
				<li>Checkbox Field: {checkboxField ? "Show" : "Hide"} </li>
				<li>Radio Field: {radioField}</li>
				<li>Text Field: {textField}</li>
				<li>Select Field: {selectField}</li>
				<li>Range Field: {rangeNo}</li>
				<li>Toggle Field: {toggleField ? "Show" : "Hide"}</li>
			</ul>
		</div>
	);
}
