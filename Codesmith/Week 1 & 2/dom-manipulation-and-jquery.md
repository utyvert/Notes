# Vanilla DOM Manipulation and JQuery

- [Vanilla DOM Manipulation and JQuery](#vanilla-dom-manipulation-and-jquery)
  - [DOM](#dom)
  - [HTML DOM](#html-dom)
  - [Traversing with vanilla DOM manipulation](#traversing-with-vanilla-dom-manipulation)
  - [JQuery](#jquery)


## DOM

- The **HTML DOM Standard** defines a programming interface for HTML elements.
- Browsers represent a web page as a series of objects in a **Document Object Model** (DOM).
- Javascript is used to interact with the browser's web API to manipulate the DOM.
- DOM is a massive object.

## HTML DOM

1. HTML page loads, the browser creates a document object model of the page.
2. DOM is exposed to our Javascript via **document**.
3. *Then* our browser should load our Javascript.

## Traversing with vanilla DOM manipulation

- document.getElementByID
- document.getElementByClass
- etc.

```js
document.addEventListener("DomContentLoaded, function() {
  // code...
})
```

## JQuery

- Shortcuts - uses '$'

```js
document.ready(function() {
  // code...
})
```

**Heavyweight library - developers have moved to lighter libraries**


