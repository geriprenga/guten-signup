/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const { attributes: {content, inpPlaceholder}, setAttributes} = props;

	const onChangeBtnText = (newContent) => {
		setAttributes({content: newContent});
	};

	const onChangePlaceholder = (newPlacehld) => {
		setAttributes({inpPlaceholder: newPlacehld});
	};

	console.log('editor-val', inpPlaceholder);
	return (
		<div className="editor-block-wrapper">
			<div className="editor-wrapper-div">
				<p>Sign-up Button Title</p>
				<RichText
					className="editor-fields"
					onChange={onChangeBtnText}
					value={content}
				/>
			</div>
			<div className="editor-wrapper-div">
				<p>Placeholder Title</p>
				<RichText
					className="editor-fields"
					onChange={onChangePlaceholder}
					value={inpPlaceholder}
				/>
			</div>
		</div>
	);
}
