/*!
 * Star Rating <LANG> Translations
 *
 * This file must be loaded after 'star-rating.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 *
 * bootstrap-star-rating v4.1.3
 * http://plugins.krajee.com/star-rating
 *
 * Copyright: 2013 - 2021, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD 3-Clause
 * https://github.com/kartik-v/bootstrap-star-rating/blob/master/LICENSE.md
 */
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(window.jQuery);
    }
}(function ($) {
    "use strict";
    $.fn.ratingLocales['<LANG>'] = {
        defaultCaption: '{rating} stars',
        starCaptions: {
            0.5: 'Half Star',
            1: 'One star - Many improvements to be made',
            1.5: 'One & Half Star',
            2: 'Two stars - Some improvements needed',
            2.5: 'Two & Half Stars',
            3: 'Three stars - It\'s OK',
            3.5: 'Three & Half Stars',
            4: 'Four stars - It\'s good',
            4.5: 'Four & Half Stars',
            5: 'Five stars - This is great!'
        },
        clearButtonTitle: 'Clear',
        clearCaption: 'Not rated'
    };
}));
