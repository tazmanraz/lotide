# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. There is still some testing and
refactoring required but the implemetations all still work. 

## Usage

**Install it:**

`npm install @imiah/lotide`

**Require it:**

`const _ = require('@imiah/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: Asserts whether two arrays are equal
* `assertEqual(actual, expected)`: Asserts if two primitive values are equal
* `assertObjectEquals(actual, expected)`: Asserts if 2 objects are equal
* `countLetters(word)`: Returns the frequency of each letter
* `countOnly(allItems, itemsToCount)`: Counts how frequency of values passed in itemsToCount
* `eqArrays(arr1, arr2)`: Tests if two arrays are equal
* `eqObjects(object1, object2)`: Tests if two objects are equal
* `findKey(object, callback)`: Returns first key of value put in callback
* `findKeyByValue(obj, val)`: Returns key of the object value
* `head(arr)`: Returns first value of an array
* `letterPositions(sentence)`: Returns indices of string where each character is.
* `map(actual, expected)`: Returns a new array with callback to original array
* `middle(array)`: Returns the middle element(s) of an array.
* `tail(array)`: Returns the all elements of array proceeding the head.
* `takeUntil(array, callback)`: Returns array of elements until callback condition is met.
* `without(input, takeout)`: Returns array taking out the filtered items mentioned in callback
