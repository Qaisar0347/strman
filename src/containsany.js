/**
 * Verifies that one or more of needles are contained in value
 * @param {String} value The input string
 * @param {String[]} needles An array of string which are checked to be contained within `value`
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching
 * @return {Boolean} True if at least one of `needles` is contained
 * @playground
 * var strman = require('strman')
 *
 * let title = 'Daniel Leite'
 * let needles = ['Leite', 'Oliveira']
 * strman.containsAny(title, needles) // returns true
 */
const containsAny = (value, needles, caseSensitive = true) =>
    needles.reduce((previous, current) =>
        contains(value, current, caseSensitive)?true:previous, false);

export {containsAny};
