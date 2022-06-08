import { __ } from "@wordpress/i18n";
import {
	TextControl,
	Button,
	PanelBody,
	Toolbar,
	ToolbarGroup,
	ToolbarButton,
} from "@wordpress/components";

import {
	useBlockProps,
	ColorPalette,
	InspectorControls,
	MediaUpload,
	BlockIcon,
	BlockControls,
	MediaUploadCheck,
	AlignmentToolbar,
} from "@wordpress/block-editor";

import { paragraph, formatBold, formatItalic, link } from "@wordpress/icons";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const onChangeBGColor = (hexColor) => {
		setAttributes({ bg_color: hexColor });
	};

	const onChangeTextColor = (hexColor) => {
		setAttributes({ text_color: hexColor });
	};

	const onSelectImg = (imgSelect) => {
		setAttributes({ mediaURL: imgSelect.url, mediaID: imgSelect.id });
	};

	const onSelectImages = (imagesSelect) => {
		setAttributes({ images: imagesSelect });
	};

	const ALLOWED_MEDIA_TYPES = ["audio", "image"];

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
				<PanelBody title="Image settings">
					<p>
						<strong>Select Image</strong>
					</p>
					<MediaUpload
						onSelect={onSelectImg}
						allowedTypes={ALLOWED_MEDIA_TYPES}
						type="image"
						value={attributes.img_url}
						render={({ open }) => (
							<Button icon="upload" onClick={open}>
								Open Media Library
							</Button>
						)}
					/>
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<Toolbar label="Options">
					<ToolbarGroup>
						<ToolbarButton icon={paragraph} label="Paragraph" />
					</ToolbarGroup>
					<ToolbarGroup>
						<ToolbarButton icon={formatBold} label="Bold" />
						<ToolbarButton icon={formatItalic} label="Italic" />
						<ToolbarButton icon={link} label="Link" />
					</ToolbarGroup>
				</Toolbar>
				<AlignmentToolbar />
				<MediaUpload
					onSelect={onSelectImg}
					allowedTypes={ALLOWED_MEDIA_TYPES}
					type="image"
					value={attributes.img_url}
					render={({ open }) => (
						<Button icon="upload" onClick={open}>
							Open Media Library
						</Button>
					)}
				/>
			</BlockControls>
			<TextControl
				value={attributes.message}
				onChange={(val) => setAttributes({ message: val })}
				style={{
					backgroundColor: attributes.bg_color,
					color: attributes.text_color,
				}}
			/>
			{attributes.mediaURL && (
				<img className="the-image" src={attributes.mediaURL} />
			)}
		</div>
	);
}
