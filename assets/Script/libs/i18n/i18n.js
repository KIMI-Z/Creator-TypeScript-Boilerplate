import { zh } from "./data/zh";
var Polyglot = require("polyglot");
var language = zh; // update this to set your default displaying language in editor
// let polyglot = null;
var polyglot = new Polyglot({ phrases: language });
export var i18n = {
    /**
     * This method allow you to switch language during runtime, language argument should be the same as your data file name
     * such as when language is 'zh', it will load your 'zh.ts' data source.
     * @method init
     * @param language - the language specific data file name, such as 'zh' to load 'zh.ts'
     */
    init: function (language) {
        var data = require(language);
        polyglot.replace(data);
    },
    /**
     * this method takes a text key as input, and return the localized string
     * Please read https://github.com/airbnb/polyglot.js for details
     * @method t
     * @return {String} localized string
     * @example
     *
     * let myText = i18n.t('MY_TEXT_KEY');
     *
     * // if your data source is defined as
     * // {"hello_name": "Hello, %{name}"}
     * // you can use the following to interpolate the text
     * let greetingText = i18n.t('hello_name', {name: 'nantas'}); // Hello, nantas
     */
    t: function (key, opt) {
        return polyglot.t(key, opt);
    }
};
