/**
 * Actually both abstract equality(==) and strict equality(===) checks the type but the difference is both of them do something different after checking the type.
 * So == does type checking and if type are same it calls ===.
 * Whereas, === checks the type and if type are not same returns false,
 */
// https://262.ecma-international.org/10.0/#sec-abstract-equality-comparison
/*
    Abstract Equality Comparison
    The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

    If Type(x) is the same as Type(y), then
    Return the result of performing Strict Equality Comparison x === y.
    If x is null and y is undefined, return true.
    If x is undefined and y is null, return true.
    If Type(x) is Number and Type(y) is String, return the result of the comparison x == ! ToNumber(y).
    If Type(x) is String and Type(y) is Number, return the result of the comparison ! ToNumber(x) == y.
    If Type(x) is Boolean, return the result of the comparison ! ToNumber(x) == y.
    If Type(y) is Boolean, return the result of the comparison x == ! ToNumber(y).
    If Type(x) is either String, Number, or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
    If Type(x) is Object and Type(y) is either String, Number, or Symbol, return the result of the comparison ToPrimitive(x) == y.
    Return false.

    Strict Equality Comparison
    The comparison x === y, where x and y are values, produces true or false. Such a comparison is performed as follows:

    If Type(x) is different from Type(y), return false.
    If Type(x) is Number, then
    If x is NaN, return false.
    If y is NaN, return false.
    If x is the same Number value as y, return true.
    If x is +0 and y is -0, return true.
    If x is -0 and y is +0, return true.
    Return false.
    Return SameValueNonNumber(x, y).

    // https://262.ecma-international.org/10.0/#sec-samevaluenonnumber
    ->SameValueNonNumber ( x, y )
    The internal comparison abstract operation SameValueNonNumber(x, y), where neither x nor y are Number values, produces true or false. Such a comparison is performed as follows:

    Assert: Type(x) is not Number.
    Assert: Type(x) is the same as Type(y).
    If Type(x) is Undefined, return true.
    If Type(x) is Null, return true.
    If Type(x) is String, then
    If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), return true; otherwise, return false.
    If Type(x) is Boolean, then
    If x and y are both true or both false, return true; otherwise, return false.
    If Type(x) is Symbol, then
    If x and y are both the same Symbol value, return true; otherwise, return false.
    If x and y are the same Object value, return true. Otherwise, return false.
 */

console.log(NaN === NaN);
console.log(typeof NaN);
/**
 * In JS NaN is the only primitive value not equal to itself
 */

console.log(10 === 10);

console.log(0 === -0);

console.log(-0 === 0);

console.log({ x: 2 } == { x: 2 });
let a = { x: 2 };
console.log(a === a);
/**
 * Here in { x: 2 } == { x: 2 }
 * both have same type (object) so, { x: 2 } === { x: 2 } will be called
 * so, it is not number so SameValueNonNumber( x, y ) will be called
 * under that in object if value(x) is equal to value(y) return true but here { x: 2 } and { x: 2 } are both in another memory so values are different so return false
 * but for let a = { x: 2 };
 * console.log(a === a);
 * here a and a belongs to the same memory, so it will return true
 */

console.log({ x: 2 } === { x: 2 });
/**
 * for this the type is same but its not number
 * so, SameValueNonNumber( x, y ) will be called
 * which will return false
 */

console.log(Symbol("sanket") === Symbol("sanket"));
let b = Symbol("sanket");
console.log(b === b);
