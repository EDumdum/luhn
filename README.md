# luhn [![Build Status](https://travis-ci.org/EDumdum/luhn.svg?branch=master)](https://travis-ci.org/EDumdum/luhn)

Validation and control key generation against Luhn formula in javascript.

## Usage

### In node.js

```js
var Luhn = require('luhn-js');

Luhn.isValid('123'); // false
Luhn.isValid('11122'); // true

Luhn.generate('123'); // 1230
Luhn.generate('456'); // 4564
```

## API

### isValid

Check input value, must be not null, not undefined and of type string or number.

The stringified value must be only digits and longer than 1 (/^[0-9]{2,}$/).

Check the value against Luhn formula.

Returns boolean.

### generate

Check input value, must be not null, not undefined and of type string or number.

The stringified value must be only digits and longer than 0 (/^[0-9]{1,}$/).

Returns input value with checkdigit appended at the end.

### getRemainder

Compute remainder using Luhn formula.

Fast entry: we assume that the given parameter is a non-null string containing only digits. It will crash otherwise.

Returns a number.

Note: Remainder cannot be directly used as check digit. To generate check digit, please refer to method generate.
