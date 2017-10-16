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

const MAPPING_FIGURE = {
    'even': {
        '0': 0, '1': 2, '2': 4, '3': 6, '4': 8, '5': 1, '6': 3, '7': 5, '8': 7, '9': 9
    },
    'odd': {
        '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9
    }
};

function getLuhnRemainder(value) {
    const length = value.length;
    let accumulator = 0;

    for (let i = 0; i < length; ++i) {
        accumulator += (length - i) % 2 === 0 ? MAPPING_FIGURE.even[value[i]] : MAPPING_FIGURE.odd[value[i]];
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
