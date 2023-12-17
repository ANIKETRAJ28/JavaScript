/**
 * The ToBoolean abstract operation converts the given type to a Boolean value.
 * ToBoolean works a bit differently when compared to ToString or ToNumber
 * It maintains a list of values which when recieved as an argument returns false.
 * And everything apaer from the list of values returns true.
 */
/*
    https://262.ecma-international.org/10.0/#sec-logical-not-operator
                        ToBoolean Conversions
    Argument Type	                            Result
    Undefined	                                Return false.
    Null	                                    Return false.
    Boolean	                                    Return argument.
    Number	                                    If argument is +0, -0, or NaN, return false; otherwise return true.
    String	                                    If argument is the empty String (its length is zero), return false; otherwise return true.
    Symbol	                                    Return true.
    Object	                                    Return true.
 */

/**
 * How can we test the ToBoolean operation?
 * -> using logical not (!)
 * Let expr be the result of evaluating UnaryExpression.
 * Let oldValue be ToBoolean(? GetValue(expr)).
 * If oldValue is true, return false.
 * Return true.
 */
console.log(!0);
/**
 * 0 -> falsy value
 * ToBoolean(0) -> false
 * !0 -> true
 */

console.log(!-4);
/**
 * -4 -> truthy value
 * ToBoolean(-4) -> true
 * !-4 -> false
 */

console.log(!{});
/**
 * object -> truthy value
 * ToBoolean({}) -> true
 * !{} -> false
 */

console.log(!console.log(0));
/**
 * first 0 will be printed then,
 * console.log() -> returns undefined
 * and undefined -> falsy value
 * ToBoolean(undefined) -> false
 * !undefined -> true
 */
