/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */


export default function save(props) {

	return (
		<div>
			<div className="sign-up-form">
				<RichText.Content tagName="input" type="email" className="sign-up-field" placeholder={props.attributes.inpPlaceholder} />
				{/* <input type="email" className="sign-up-field" placeholder={props.attributes.inpPlaceholder}/>  */}
				<RichText.Content tagName="button" className="signup-btn" value={props.attributes.content} />
			</div>
			<p className="error-msg"></p>
			<p className="success-msg"></p>
		</div>
	);
}

