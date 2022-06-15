import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	return (
		<div
			{...useBlockProps.save()}
			style={{
				backgroundColor: attributes.bg_color,
				color: attributes.text_color,
				textAlign: attributes.align,
				fontSize: attributes.font_size ? `${attributes.font_size}px` : null,
			}}
		>
			{attributes.message}
		</div>
	);
}
