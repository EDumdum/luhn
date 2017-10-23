'use strict';

const luhn = {
    /**
     * Check input value, must be not null, not undefined and of type string or number.
     * The stringified value must be only digits and longer than 1 (/^[0-9]{2,}$/).
     * Check the value against Luhn formula.
     * 
     * @param {*} rawValue 
     */
    isValid(rawValue) {
        const value = stringifyInput(rawValue);

        if (!value.match(FORMAT_ISVALID)) {
            throw new Error('Exception value of format \'' + FORMAT_ISVALID + '\', found: \'' + value + '\'');
        }
        
        return getLuhnRemainder(value) === 0;
    },

    /**
     * Check input value, must be not null, not undefined and of type string or number.
     * The stringified value must be only digits and longer than 0 (/^[0-9]{1,}$/).
     * Add check digit to the rawValue and return it.
     * 
     * @param {*} rawValue 
     */
    generate(rawValue) {
        const value = stringifyInput(rawValue);

        if (!value.match(FORMAT_GENERATE)) {
            throw new Error('Exception value of format \'' + FORMAT_GENERATE + '\', found: \'' + value + '\'');
        }

        return value + ((10 - getLuhnRemainder(value + '0')) % 10).toString();
    },

    /**
     * Compute remainder using Luhn formula.
     * Fast entry: we assume that the given parameter is a non-null string
     * containing only digits. It will crash otherwise.
     * Returns a number.
     * 
     * Note: Remainder cannot be directly used as check digit.
     * To generate check digit, please refer to method generate.
     * 
     * @param {*} rawValue 
     */
    getRemainder(rawValue) {
        return getLuhnRemainder(rawValue);
    }
};

const FORMAT_ISVALID = /^[0-9]{2,}$/;
const FORMAT_GENERATE = /^[0-9]{1,}$/;

const CHARCODE_0 = '0'.charCodeAt(0);
const MAPPING_EVEN = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];

function getLuhnRemainder(value) {
    var length = value.length;
    var accumulator = 0;
    var bit = 0;

    while (length-- > 0) {
        accumulator += (bit ^= 1) ? value.charCodeAt(length) - CHARCODE_0 : MAPPING_EVEN[value.charCodeAt(length) - CHARCODE_0];
    }

    return accumulator % 10;
}

function stringifyInput(rawValue) {
    if (rawValue !== null && rawValue !== undefined) {
        switch(typeof rawValue) {
        case 'string':
            return rawValue;
        case 'number':
            return rawValue.toString();
        default:
            throw new Error('Expecting value of type \'string\' or \'number\', found: \'' + (typeof rawValue) + '\'');
        }
    }

    throw new Error('Expecting value of type \'string\' or \'number\', found: \'' + rawValue + '\'');
}

module.exports = luhn;
