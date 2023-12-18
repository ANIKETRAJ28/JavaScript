// We can use '-' operator to mimic ToNumber
// https://262.ecma-international.org/10.0/#sec-subtraction-operator-minus
// The Subtraction Operator ( - )
/*
    Runtime Semantics: Evaluation

    AdditiveExpression:AdditiveExpression-MultiplicativeExpression

    Let lref be the result of evaluating AdditiveExpression.
    
    Let lval be ? GetValue(lref).
    
    Let rref be the result of evaluating MultiplicativeExpression.
    
    Let rval be ? GetValue(rref).
    
    Let lnum be ? ToNumber(lval).
    
    Let rnum be ? ToNumber(rval).
    
    Return the result of applying the subtraction operation to lnum and rnum.
 */

/**
 * subtraction always converts both the operations to number
 * a-b => a -> lval, b -> rval
 * lnum = ToNumber(a);
 * rnum = ToNumber(b);
 * return lnum - rnum;
 */

/**
 * ToNumber(argument)
 */
// https://262.ecma-international.org/10.0/#sec-tonumber

/*
                    ToNumber Conversions
    Argument Type	                   Result
    Undefined	                       Return NaN.
    Null	                           Return +0.
    Boolean	                           If argument is true, return 1. If argument is false, return +0.
    Number	                           Return argument (no conversion).
    String	                           See grammar and conversion algorithm below.
    Symbol	                           Throw a TypeError exception.
    Object                             Apply the following steps:
                                       -> Let primValue be ? ToPrimitive(argument, hint Number).
                                       -> Return ? ToNumber(primValue).
 */

// for refering the grammar and conversion algorithm
// https://262.ecma-international.org/10.0/#sec-tonumber-applied-to-the-string-type
/**
    summarizing the above
    for string to number conversion
    "" -> 0
    "0" -> 0
    "-0" -> 0
    "009" -> 9
    "3.145" -> 3.145
    ".0" -> 0
    "0." -> 0
    "." -> NaN
    "$" -> NaN
    "0xaf" -> 175 // here 0xaf is a hexadecimal number and a hexadecimal number starts with 0x so JS can parse it to number
    "abc32" -> NaN
 */
// examples

console.log(12 - 4);
/**
 * both of them are already a number, so we just subtract
 */

console.log(undefined - 3);
/**
 * undefined is not a valid number, to make it undergo ToNumber abstract operation
 * ToNumber(undefined) -> NaN
 * NaN - 2 -> when you do any operation with NaN, results to NaN
 */

console.log(null - 5);
/**
 * null is not a valid number, so it will make it to undergo ToNumber abstract operation
 * ToNumber(null) -> +0
 * 0 - 5 -> -5
 */

console.log("132" - 10);
/**
 * "132" is a string, so it will undergo ToNumber abstract operation
 * ToNumber("132") -> 132
 * 132 - 10 -> 122
 */

console.log("12fd" - 20);
/**
 * "12fd" is string, so it will undergo ToNumber abstract operation
 * ToNumber("12fd") -> NaN because this string cannot be parsed into a number
 * NaN - 20 -> NaN
 */

// console.log(Symbol("132") - 30);
/**
 * gives typeerror
 */

console.log(4 - true);
/**
 * true is a boolean, so it will undergo ToNumber abstract operation
 * ToNumber(true) -> 1
 * 4 - 1 -> 3
 */

console.log("0xf" - 1);
/**
 * "0xf" is a string, but in the starting we have 0x which denotes start of hexadecimal value
 * so if we can convert this string to a valid hexadecimal number then we will do it
 * ToNumber("0xf") -> 15
 * 15 - 1 -> 14
 */
console.log("0xft" - 1);
/**
 * "0xf" is a string, but in the starting we have 0x which denotes start of hexadecimal value
 * so if we can convert this string to a valid hexadecimal number then we will do it
 * ToNumber("0xft") -> NaN because 0xf is a hexadecimal value but 0xft is not a hexadecimal number
 * NaN - 1 -> NaN
 */

console.log("011" - 1); // 10
console.log("0xabcd" - 2); // 43979

console.log(10 - { a: 45 });
/**
 * 10 is already a number
 * {a: 10} is an object and for object we call ToPrimitive() with hint number
 * so, it will call valueOf() which will return the same object
 * then it will call toString() which will return '[object object]' which is string i.e primitive
 * now ToNumber() will be called for the '[object object]' wiich will return NaN
 * 10 - NaN -> NaN
 */

// overriding valueOf() and toString()
let x = {
  b: 90,
  valueOf() {
    return 2;
  },
};
console.log(x - 10);

// console.log("sanket" + {a: 90,valueOf() {return {};}, toString() {return {};}});
/**
 * the object will csall ToPrimitive() with no hint
 * hint -> number
 * so it will call valueOf() which returns object
 * then it will call toString() which will return object
 * so it will throw error
 */
/**
 * x is non primitive i.e object
 * for object it will call ToPrimitive() with hint as number
 * so, it will call valueOf() which will return 2 which is primitive value
 * 2 - 10 -> -8
 */

// some more cases with ToNumber
/**
 * [] -> 0
 * [""] -> 0
 * ["0"] -> 0
 * ["-0"] -> 0
 * [null] -> 0
 * [undefined] -> 0
 * [1,2,3] -> NaN
 * [[[]]] -> 0
 */

console.log(10 - []);
console.log(10 - [""]);
