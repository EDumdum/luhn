'use strict';

const chai = require('chai');
const expect = chai.expect;

/** @namespace describe */
/** @namespace it */

const luhn = require('../src/luhn');

describe('luhn-getRemainder', function() {
    it('Check return with elligible value', function() {
        expect(luhn.getRemainder('1230')).eq(0);
        expect(luhn.getRemainder('9876543210')).eq(3);
        expect(luhn.getRemainder('57850')).eq(9);
        expect(luhn.getRemainder('9876543240')).eq(9);
        expect(luhn.getRemainder('14500')).eq(4);
        expect(luhn.getRemainder('1234567890')).eq(3);
        expect(luhn.getRemainder('180')).eq(8);
        expect(luhn.getRemainder('1234567820')).eq(8);
    });
});
