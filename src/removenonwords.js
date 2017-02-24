/**
 * Remove all non word characters.
 * @playground
 * var removeNonWords = require('strman').removeNonWords;
 * let title = "__strman../";
 * let result = removeNonWords(title);
 * @param {String} value - The String!.
 * @param {String} replaced - Value to replace.
 * @return {String} - String without non word characters.
 */
const removeNonWords = (value, replaced = '') => replace(value, '[^\\w]+', replaced);

export {removeNonWords};
