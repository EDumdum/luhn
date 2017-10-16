# luhn

Validation and control key geeration against Luhn formula in javascript.

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

### generate

Check input value, must be not null, not undefined and of type string or number.
The stringified value must be only digits and longer than 0 (/^[0-9]{1,}$/).
Add check digit to the rawValue and return it.
