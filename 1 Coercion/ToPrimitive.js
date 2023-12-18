// This function takes an input argument and tries to convert it into a non-object type(primitive type).
// If it cannot convert it, it will throw error.
// It takes one more optional parameter called as preferredType.
// If we have more than 2 or more than 2 values that can become answer, then optional argument helps us
// if preferredType is not given, hint = "default" // hint is the new variable we initialize
// else if preferredType is "string", hint = "string"
// else preferedType is "number", hint = "number"
// if hint is default then hint = "number"

/**
 * hint --> string              hint --> number
 *
 * toString()                   valueOf()
 * valueOf()                    toString()
 */

/**
 * hint -> string -> call toString() -> result is non object -> return result
 *                              -> result is an object -> call valueOf() -> result is non object -> return result
 *                                                                       -> result is object -> throw error
 */
/**
 * hint -> number -> call valueOf() -> result is non object -> return result
 *                              -> result is an object -> call toString() -> result is non object -> return result
 *                                                                       -> result is object -> throw error
 */

/**
 * valueOf and toString() are not abstract operations,
 * That means we can call them
 */

/**
 * by default toString() for an object returns '[object object]'
 * by default valueOf() for an object returns the same object
 */
let a = { english: 90, maths: 76 };
console.log(a.toString());
console.log(a.valueOf());

/**
 * by default toString() for an array returns array without brackets
 * by default valueOf() for an array returns the same array
 */
let x = [1, 2, 3];
console.log(x.toString());
console.log(x.valueOf());
