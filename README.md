# Greeter Library

This project is part of my learning journey to mastering **JavaScript**. The goal was to deeply understand JavaScript's core concepts, quirks, and inner workings. This simple library applies pre-ES6 syntax to solidify my understanding of concepts such as execution context, closures, and prototypal inheritance. The concepts were explored in depth through the **[JavaScript: Understanding the Weird Parts (2024 Edition)](https://www.udemy.com/course/understand-javascript)** course.

## Usage

Include the library in your project and create a `Greeter` object like this:

```javascript
var greeter = G$("John", "Doe");
greeter.logFullName().logGreetings(false);
```

## What I Learned

1. **Execution Context**: Understanding the global object, `this`, the execution stack, and the two phases of execution (hoisting and execution). I also delved into the scope chain and outer environment references.
2. **Type Coercion**: Studied the difference between `==` and `===` and how coercion works under the hood.
3. **Functions**: Learned that functions in JavaScript are special objects that have names, code, and other properties.
4. **Automatic Semicolon Insertion**: Avoiding the pitfalls of automatic semicolon insertion, especially with return statements.
5. **IIFE (Immediately Invoked Function Expressions)**: How IIFE was useful for scoping before ES6 introduced `let` and `const`.
6. **Closures**: Explored how closures capture variables from their outer lexical environment.
7. **Function Methods (`call`, `apply`, and `bind`)**: Learned about these important methods for controlling `this` in function objects.
8. **Functional Programming**: Practiced passing functions as arguments and returning functions from other functions.
9. **Classical vs. Prototypal Inheritance**: Compared classical inheritance (common in OOP languages) with JavaScript’s prototypal inheritance model.

## Conclusion

This project helped me gain a stronger foundation in JavaScript’s more intricate parts, reinforcing important concepts that will be useful for both legacy and modern JavaScript development.
