/**
 * Check requirements.  
 * Returns the Luhn check digit appended to the value.
 * 
 * Requirements:
 * - rawValue must be not `Null`
 * - rawValue must be of type `String`
 * - rawValue must respest format `^[0-9]{1,}$`
 * 
 * @param {*} rawValue 
 */
export function generate(rawValue: string): string;

/**
 * Does NOT check requirements.  
 * Returns the Luhn remainder.
 * Note: 
 *   `getRemainder(value) === 0` is equivalent to `isValid(value)`. 
 *   You may want to use this method instead of `isValid` if you ensure argument 
 *   requirements on your side.
 * 
 * Requirements
 * - rawValue must be not `Null`
 * - rawValue must be of type `String`
 * 
 * @param {*} rawValue 
 */
export function getRemainder(rawValue: string): number;

/**
 * Check requirements.  
 * Returns if the Luhn check digit is valid.
 *
 * Requirements:
 * - rawValue must be not `Null`
 * - rawValue must be of type `String`
 * - rawValue must respect format `^[0-9]{2,}$`
 * 
 * @param {*} rawValue 
 */
export function isValid(rawValue: string): boolean;

