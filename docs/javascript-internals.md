---
title: Javascript Internals
description: Concepts to understand javascript internals
---

## Table of Contents

## Engine Architecture

JavaScript engines are a program that helps in converting your code of JavaScript into a lower level code or machine code. ECMAScript Standards is being followed by the JavaScript engines. The job of these standards is to give a definition, how JavaScript engines should work. It also tells what all features it should have.

ECMA Script specifies the procedure in which JavaScript should be implemented by the browser so that in every single browser this program runs the same. It does not specify how the JavaScript should be running inside these browsers. It depends on the browser of the vendor to decide this. Each browser gives you a JavaScript engine that will run the JavaScript code.

The work of the JavaScript engine is taking JavaScript source code. Then perform the compilation to binary instructions (machine code) that are easily understandable by CPU.

A JavaScript engine which is limited consists of a baseline compiler whose work is to do the compilation of the code in the form of intermediate representation (IR), in other words, it is called byte code and then gives the byte code to the interpreter.

Further, the interpreter takes this byte code, and then make the conversion into machine code. This machine code will further run this code on the hardware of the machine.

At the time of looking at some of the JavaScript engines, it might look complicated to you because of their multiple baseline and optimization of compilers but when it is in a nutshell, they do follow the same structure of the optimization phenomenon.

### V8

V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It means V8 is a C++ program, which receives JavaScript code, compiles, and executes it.

**V8 Does:**

1. Compiles and executes JS code
2. Handling call stack — running your JS functions in some order
3. Managing memory allocation for objects — the memory heap
4. Garbage collection — of objects which are no longer in use
5. Provide all the data types, operators, objects and functions

**V8 Can:**

1. Provide the event loop, but this is sometimes implemented by the browser as well

**V8 Doesn’t:**

1. Know anything about the Document Object Model (DOM) — which is provided by the browser, and obviously irrelevant to Node.js for example.

V8 is a single threaded execution engine. It’s built to run exactly one thread per JavaScript execution context. You can actually run two V8 engines in the same process — e.g. web-workers, but they won’t share any variables or context like real threads. This doesn’t mean V8 is running on a single thread, but it does mean it provides a JavaScript flow of a single thread.

On the runtime, V8 is mainly managing the heap memory allocation and the single threaded call stack. The call stack is mainly a list of function to execute, by calling order. Every function which calls another function will be inserted one after the other directly, and callbacks will be sent to the end. This is actually why calling a function with setTimeout of zero milliseconds sends it to the end of the current line and doesn’t call it straight away (0 milliseconds).

### JS Interpreter — Ignition & Optimization Compiler — TurboFan & Crankshaft

V8 gets its speed from just-in-time (JIT) compilation of JavaScript to native machine code, just before executing it. First of all, the code is compiled by a baseline compiler, which quickly generates non-optimized machine code. On runtime, the compiled code is analyzed and can be re-compiled for optimal performance. Ignition provides the first while TruboFan & Crankshaft the second.

JIT compilation result machine code can take a large amount of memory, while it might be executed once. This is solved by the Ignition, which is executing code with less memory overhead.

The TurboFan project started in 2013 to improve the weakness of Crankshaft which isn't optimized for some part of the JavaScript functionality e.g. error handling. It was designed for optimizing both existing and future planned features at the time.

![Ignition](https://v8.dev/_img/ignition-interpreter/ignition-pipeline.png)

### WebAssembly — Liftoff

Achieving great performance is also key in the browser, and this is the task Liftoff is used for — generating machine code. Not using the complex multi-tier compilation, Liftoff is a simpler code generator, which generates code for each opcode (a single portion of machine code, specifying an operation to be performed) at a time. Liftoff generates code much faster than TurboFan (~10x) which is obviously less performant (~50%).

### Garbage Collection — Orinoco

Running over the memory heap, looking for disconnected memory allocations is the Orinoco. Implementing a generational garbage collector, moving objects within the young generation, from the young to the old generation, and within the old generation. These moves leave holes, and Orinoco performs both evacuation and compaction to free space for more objects.

Another optimization performed by Orinoco is in the way it searches through the heap to find all pointers that contain the old location of the objects moved and update them with the new location. This is made using a data structure called remembered set.

On top of these, black allocation is added, which basically means the garbage collection process automatically marks living objects in black in order to speed up the iterative marking process.

### Summary v8 Engine

To summarize, let’s have a look at the compilation pipeline from the top.

![pipeline](https://www.freecodecamp.org/news/content/images/2020/08/v8-overview-2.png)

We’ll go over it step by step:

1. It all starts with getting JavaScript code from the network.
2. V8 parses the source code and turns it into an Abstract Syntax Tree (AST).
3. Based on that AST, the Ignition interpreter can start to do its thing and produce bytecode.
4. At that point, the engine starts running the code and collecting type feedback.
5. To make it run faster, the byte code can be sent to the optimizing compiler along with feedback data. The optimizing compiler makes certain assumptions based on it and then produces highly-optimized machine code.
6. If, at some point, one of the assumptions turns out to be incorrect, the optimizing compiler de-optimizes and goes back to the interpreter.

#### Resources

- [V8 blog](https://v8.dev/)
- [How JavaScript Engine Works?](https://dzone.com/articles/how-javascript-engine-works)
- [Javascript V8 Explained](https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef)
- [Javascript under the hood - V8](https://www.freecodecamp.org/news/javascript-under-the-hood-v8/)

## Call Stack & Memory Heap

Call Stack is a data structure for javascript interpreters to keep track of function calls in the program. It has two major actions:

- Whenever you call a function for its execution, you are pushing it to the stack.
- Whenever the execution is completed, the function is popped out of the stack.

Heap(Or memory heap) is the memory location where objects are stored when we define variables. i.e, This is the place where all the memory allocations and de-allocation take place. Both heap and call-stack are two containers of JS runtime. Whenever runtime comes across variables and function declarations in the code it stores them in the Heap.

## Javascript Runtime

Is the environment where the code is executed. The engine is part of the environment. Javascript code get compiled just in time (JIT).

The JavaScript runtime environment provides access to built-in libraries and objects that are available to a program so that it can interact with the outside world and make the code work.

In the context of a browser this is comprised of the following elements:

1. The JavaScript engine (which in turn is made up of the heap and the call stack)
2. Web APIs
3. The callback queue
4. The event loop

## Single Thread Execution

JavaScript is a single-threaded language. Because the language specification does not allow the programmer to write code so that the interpreter can run parts of it in parallel in multiple threads or processes. Whereas languages like java, go, C++ can make multi-threaded and multi-process programs.
