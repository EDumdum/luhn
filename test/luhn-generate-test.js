'use strict';

const chai = require('chai');
const expect = chai.expect;

/** @namespace describe */
/** @namespace it */

const luhn = require('../src/luhn');

describe('luhn-generate', function() {
    it('Check inelligible input (null, undefined, not a string)', function() {
        expect(function() { 
            luhn.generate(null); 
        }).to.throw('Expecting value of type \'string\', found: \'null\'');
        expect(function() { 
            luhn.generate(undefined); 
        }).to.throw('Expecting value of type \'string\', found: \'undefined\'');
        expect(function() { 
            luhn.generate([]); 
        }).to.throw('Expecting value of type \'string\', found: \'object\'');
    });

    it('Check input value format, excepted /^[0-9]{1,}$/', function() {
        expect(function() {
            luhn.generate('');
        }).to.throw('Exception value of format \'/^[0-9]{1,}$/\', found: \'\'');
        expect(function() {
            luhn.generate('123a');
        }).to.throw('Exception value of format \'/^[0-9]{1,}$/\', found: \'123a\'');
    });

    it('Check return with elligible value', function() {
        expect(luhn.generate('123')).eq('1230');
        expect(luhn.generate('987654321')).eq('9876543217');
        expect(luhn.generate('5785')).eq('57851');
        expect(luhn.generate('987654324')).eq('9876543241');
    });
});
