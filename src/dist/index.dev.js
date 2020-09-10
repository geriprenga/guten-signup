"use strict";

var _blocks = require("@wordpress/blocks");

var _axios = _interopRequireDefault(require("axios"));

var _i18n = require("@wordpress/i18n");

require("./style.scss");

var _edit = _interopRequireDefault(require("./edit"));

var _save = _interopRequireDefault(require("./save"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

/**
 * Internal dependencies
 */

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
(0, _blocks.registerBlockType)('create-block/guten-signup', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: (0, _i18n.__)('Guten Signup', 'create-block'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: (0, _i18n.__)('Example block written with ESNext standard and JSX support – build step required.', 'create-block'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'widgets',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'smiley',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * Attributes.
   */
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: 'button'
    },
    inpPlaceholder: {
      type: 'string',
      source: 'attribute',
      selector: 'input',
      attribute: 'placeholder'
    }
  },

  /**
   * @see ./edit.js
   */
  edit: _edit["default"],

  /**
   * @see ./save.js
   */
  save: _save["default"]
});