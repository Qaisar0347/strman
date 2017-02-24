/**
 * Transform to kebab-case.
 * @playground
 * var toKebabCase = require('strman').toKebabCase;
 * let title = "A Javascript string manipulation library.";
 * let result = toKebabCase(title);
 * @param {String} value - The String!.
 * @return {String} - String in kebab-case.
 */
const toKebabCase = value => {
    return toDecamelize(value, '-');
};

export {toKebabCase};
