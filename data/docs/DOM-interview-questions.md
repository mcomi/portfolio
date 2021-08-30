---
title: DOM Interview questions
---

# DOM Interview questions

## Table of Contents

In this article, we’ll look at some questions about DOM manipulation.

## What’s the difference between window vs document?

The difference between window and document is that document is a property of the window object.

window is the JavaScript global object that has everything including global functions, location, history, web components, setTimeout , XMLHttpRequest , console , localStorage and much more.

document represents the DOM of the page. The DOM represents the HTML markup that was written or generated.

With document , we have methods to traverse the DOM like getElementById , querySelector , removeChild, appendChild and more.

## What’s the difference between window.onload vs document.onload?

window.onload is fired when the DOM is ready and all the content including images, CSS, scripts, subframes, etc. finish loaded.

It means that everything is loaded.

document.onload is fired when the DOM is ready, which can be before images and other external content is loaded.

document.readyState returns 'loading' when the document is loading, 'interactive' once it’s finished parsing but stilling loading subresources, and 'complete' once it’s completely loaded.

The readystatechange event is fired when the readyState is changed.

## What’s the difference between an attribute and a property?

Attributes represent the attributes in HTML elements inside the starting tag.

They’re exposed to the DOM via a property, Properties of the JavaScript DOM objects are created when the DOM is parsed for each attribute in the HTML tag.

If an attribute is changed, the value of the property will change. On the other hand, if we change the property in the JavaScript DOM object, the attribute will stay the same.

## What are the methods to get one or more elements from the DOM?

Browsers provide us with multiple methods to get elements from the DOM.

They’re the following:

### getElementById

geteElementById returns an element with the given ID.

### getElementsByClassName

getElementsByClassName gets a NodeList array-like object, which is an object with entries that have indexes and a length property by passing in a string with the class name.

### getElementsByTagName

getElementsByTagName gets a NodeList by passing in a tag name.

### querySelector

querySelector gets a DOM Node by passing in a CSS selector string.

### querySelectorAll

querySelectorAll gets a NodeList by passing in a CSS selector string.

### getElementsByName

getElementsByName returns a list of elements by the provided name of the HTML tag

### getElementsByTagNameNS

getElementsByTagNameNS returns elements with a particular tag name within the provided namespace.

## What’s the fastest way to query DOM?

The fastest way to select an element is by ID if the ID exists.

The second quickest is getElementByClassName .

The longer the selector, the slower it will be.
querySelectorAll will be the slowest since it has to search for all kinds of CSS selectors.

Other methods like getElementById and getElementsByTagName only search for specific kinds of selectors.

## How do we use forEach and other array methods on a NodeList?

We can use the spread operator to convert the NodeList to an array, then we can use forEach or any other array method we want with the NodeList.

We can do this since it’s an array-like object.

For example, if we have the following HTML:

```html
<div>foo</div>
<div>bar</div>
<div>baz</div>
```

Then we can get and loop through the divs by running:

```javascript
[...document.querySelectorAll("div")].forEach((div) =>
  console.log(div.textContent)
);
```

Then we’ll get:

```
foo
bar
baz
```

from the console.log .

## How do we implement a function to get elements by attribute?

We can implement the function easily with document.querySelectorAll by using a CSS selector with the given attribute and value:

```javascript
const getElementsByAttribute = (attribute, value) => {
  return [...document.querySelectorAll(`[${attribute}=${value}]`)];
};
```

Therefore, if we’re given the following HTML:

```html
<div id="foo">foo</div>
<div>bar</div>
<div>baz</div>
```

We’ll see an array with the div with ID foo returned.

## How do we implement a function to add a class to an HTML element?

We can write the following function to add a class to an element:

```javascript
const addClass = (selector, className) => {
  const elm = document.querySelector(selector);
  if (elm) {
    elm.classList.add(className);
  }
};
```

In the code above, we used querySelector to get a single element. Then if the element with the given selector exists, we use the classList property’s add method to add a new class name to the element.

For example, given that we have the following HTML:

```html
<div>foo</div>
<div>bar</div>
<div>baz</div>
```

The first div will have the foo class added if we run:

```javascript
addClass("div", "foo");
```
