'use strict';

const chai = require('chai');
const expect = chai.expect;

/** @namespace describe */
/** @namespace it */

const luhn = require('../src/luhn');

describe('luhn-isValid', function() {
    it('Check inelligible input (null, undefined, not a string or number)', function() {
        expect(function() { 
            luhn.isValid(null); 
        }).to.throw('Expecting value of type \'string\' or \'number\', found: \'null\'');
        expect(function() { 
            luhn.isValid(undefined); 
        }).to.throw('Expecting value of type \'string\' or \'number\', found: \'undefined\'');
        expect(function() { 
            luhn.isValid([]); 
        }).to.throw('Expecting value of type \'string\' or \'number\', found: \'object\'');
    });

    it('Check input value format, excepted /^[0-9]{2,}$/', function() {
        expect(function() {
            luhn.isValid('');
        }).to.throw('Exception value of format \'/^[0-9]{2,}$/\', found: \'\'');
        expect(function() {
            luhn.isValid('0');
        }).to.throw('Exception value of format \'/^[0-9]{2,}$/\', found: \'0\'');
        expect(function() {
            luhn.isValid('1');
        }).to.throw('Exception value of format \'/^[0-9]{2,}$/\', found: \'1\'');
        expect(function() {
            luhn.isValid('123a');
        }).to.throw('Exception value of format \'/^[0-9]{2,}$/\', found: \'123a\'');

        expect(function() {
            luhn.isValid(0);
        }).to.throw('Exception value of format \'/^[0-9]{2,}$/\', found: \'0\'');
        expect(function() {
            luhn.isValid(1);
        }).to.throw('Exception value of format \'/^[0-9]{2,}$/\', found: \'1\'');
        expect(function() {
            luhn.isValid(-1);
        }).to.throw('Exception value of format \'/^[0-9]{2,}$/\', found: \'-1\'');
        expect(function() {
            luhn.isValid(1.3);
        }).to.throw('Exception value of format \'/^[0-9]{2,}$/\', found: \'1.3\'');
    });

    it('Check return with elligible value', function() {
        expect(luhn.isValid('123')).eq(false);
        expect(luhn.isValid('987654321')).eq(false);
        expect(luhn.isValid('5785')).eq(true);
        expect(luhn.isValid('987654324')).eq(true);

        expect(luhn.isValid(1450)).eq(false);
        expect(luhn.isValid(123456789)).eq(false);
        expect(luhn.isValid(18)).eq(true);
        expect(luhn.isValid(123456782)).eq(true);
    });
});
