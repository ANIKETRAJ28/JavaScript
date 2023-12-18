// We can use '+' operator to mimic ToString
// https://262.ecma-international.org/10.0/#sec-addition-operator-plus
/*
    Runtime Semantics: Evaluation
    AdditiveExpression:AdditiveExpression+MultiplicativeExpression

    Let lref be the result of evaluating AdditiveExpression.
    
    Let lval be ? GetValue(lref).
    
    Let rref be the result of evaluating MultiplicativeExpression.
    
    Let rval be ? GetValue(rref).
    
    Let lprim be ? ToPrimitive(lval).
    
    Let rprim be ? ToPrimitive(rval).
    
    If Type(lprim) is String or Type(rprim) is String, then
    
    Let lstr be ? ToString(lprim).
    
    Let rstr be ? ToString(rprim).
    
    Return the string-concatenation of lstr and rstr.
    
    Let lnum be ? ToNumber(lprim).
    
    Let rnum be ? ToNumber(rprim).
    
    Return the result of applying the addition operation to lnum and rnum.
 */

/**
 * ToString(argument)
 */

/*
                    ToString Conversions
    Argument Type                       Result
    Undefined	                        Return "undefined".
    Null	                            Return "null".
    Boolean	                            If argument is true, return "true".
                                        If argument is false, return "false".
    Number	                            Return NumberToString(argument).
    String	                            Return argument.
    Symbol	                            Throw a TypeError exception.
    Object	                            Apply the following steps:
                                        -> Let primValue be ? ToPrimitive(argument, hint String).
                                        -> Return ? ToString(primValue).
 */

// examples
console.log("Sanket" + "Singh");
/**
 * both of them are already a string
 * so toprimitive convertation will also be a string
 * and we concatinate them
 */

console.log(undefined + "node");
/**
 * undefined -> "undefined"
 * "undefined" + "node" -> "undefinednode"
 */

console.log("5" + null);
/**
 * one of them is already a string, so both of them becomes a string
 * "5" + "null" -> "5null"
 */

console.log("sanket" + { a: 10 });
/**
 * "sanket" is already primitive
 * {a : 10} is an object so, we will call ToPrimitive without a hint,
 * so hint -> number (default)
 * first we will call valueOf() which will return same object (refer ToPrimitive)
 * then we will call toString() which will return '[object object] which is a string i.e primitive (refer ToPrimitive)
 * "sanket" + "[object object]" -> "sanket[object object]"
 */

console.log("sanket" + true);
// some more cases with ToString
/**
 * null -> "null"
 * undefined -> "undefined"
 * true -> "true"
 * false -> "false"
 * 3.145 -> "3.145"
 * 0 -> "0"
 * -0 -> "0"
 * [] -> ""
 * [1,2,3] -> 1,2,3
 * [null, undefined] -> ,
 * [[], [], []] -> , ,
 * [, , ,] -> , ,
 */
console.log("sanket" + [null, undefined]); // sanket,
console.log("sanket" + []);
console.log("sanket" + [, , ,]);
console.log("sanket" + [[], [], []]);
console.log("sanket" + [1, 2, 3]);
