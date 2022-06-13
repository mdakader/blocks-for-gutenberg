import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	console.log(attributes);
	return (
		<div
			{...useBlockProps.save()}
			style={{
				backgroundColor: attributes.bg_color,
				color: attributes.text_color,
			}}
		>
			{attributes.message}

			{attributes.mediaURL && (
				<img className="the-image" src={attributes.mediaURL} />
			)}
			{attributes.images.map((image, index) => (
				<img key={index} src={image.url} data-mediaid={image.id} />
			))}

			{attributes.images.map((image, index) => (
				<img
					className="duplicate-image"
					key={index}
					src={image.url}
					data-mediaid={image.id}
				/>
			))}
		</div>
	);
}
