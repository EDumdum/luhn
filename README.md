[![npm version](https://badge.fury.io/js/luhn-js.svg)](https://badge.fury.io/js/luhn-js)
[![Build Status](https://travis-ci.org/EDumdum/luhn.svg?branch=master)](https://travis-ci.org/EDumdum/luhn)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Edumdum/luhn/master/LICENSE)

# luhn 

Validation and control key generation for credit cards (and more) using [Luhn](http://en.wikipedia.org/wiki/Luhn_algorithm) algorithm.

## Usage

### In node.js

```js
var Luhn = require('luhn-js');

Luhn.isValid('44542738505150162'); // false
Luhn.isValid('44540661970241257'); // true

Luhn.generate('4454066197024125'); // 44540661970241257

Luhn.getRemainder('44543353847144279'); // 8
```

## API

### `isValid(value)` -> `Boolean`

Check requirements.  
Returns if the Luhn check digit is valid.

*Required*
- Value must be not `Null`
- Value must be of type `String`
- Value must respect format `^[0-9]{2,}$`

### `generate(value)` -> `String`

Check requirements.  
Returns the Luhn check digit appended to the value.

*Required*
- Value must be not `Null`
- Value must be of type `String`
- Value must respest format `^[0-9]{1,}$`

### `getRemainder(value)` -> `Number`

Does **NOT** check requirements.  
Returns the Luhn remainder.

**Note:** `getRemainder(value) === 0` is equivalent to `isValid(value)`. You may want to use this method instead of `isValid` if you ensure argument requirements on your side.

*Required*
- Value must be not `Null`
- Value must be of type `String`

