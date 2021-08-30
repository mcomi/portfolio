---
title: Javascript functions
description: Useful Javascript code snippets for different projects
logo: javascript.svg
---

# Javascript

## Table of Contents

### Capitalizes the first letter of a string.

- Use array destructuring and `String.prototype.toUpperCase()` to capitalize the first letter of the string.
- Use `Array.prototype.join('')` to combine the capitalized `first` with the `...rest` of the characters.
- Omit the `lowerRest` argument to keep the rest of the string intact, or set it to `true` to convert to lowercase.

```js
const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join("").toLowerCase() : rest.join(""));
```

```js
capitalize("fooBar"); // 'FooBar'
capitalize("fooBar", true); // 'Foobar'
```

### Curries a function.

- Use recursion.
- If the number of provided arguments (`args`) is sufficient, call the passed function `fn`.
- Otherwise, use `Function.prototype.bind()` to return a curried function `fn` that expects the rest of the arguments.
- If you want to curry a function that accepts a variable number of arguments (a variadic function, e.g. `Math.min()`), you can optionally pass the number of arguments to the second parameter `arity`.

```js
const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
```

```js
curry(Math.pow)(2)(10); // 1024
curry(Math.min, 3)(10)(50)(2); // 2
```

Deeply merges two objects, using a function to handle keys present in both.

- Use `Object.keys()` to get the keys of both objects, create a `Set` from them and use the spread operator (`...`) to create an array of all the unique keys.
- Use `Array.prototype.reduce()` to add each unique key to the object, using `fn` to combine the values of the two given objects.

```js
const deepMerge = (a, b, fn) =>
  [...new Set([...Object.keys(a), ...Object.keys(b)])].reduce(
    (acc, key) => ({ ...acc, [key]: fn(key, a[key], b[key]) }),
    {}
  );
```

```js
deepMerge(
  { a: true, b: { c: [1, 2, 3] } },
  { a: false, b: { d: [1, 2, 3] } },
  (key, a, b) => (key === "a" ? a && b : Object.assign({}, a, b))
);
// { a: false, b: { c: [ 1, 2, 3 ], d: [ 1, 2, 3 ] } }
```
