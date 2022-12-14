# Node

- [Node](#node)
  - [What is a server?](#what-is-a-server)
  - [What is Node?](#what-is-node)
    - [Why is Node.js a good idea?](#why-is-nodejs-a-good-idea)
    - [Javascript in the browser](#javascript-in-the-browser)
    - [Javascript in Node](#javascript-in-node)
    - [How is Node different from JS in the browser?](#how-is-node-different-from-js-in-the-browser)
  - [Node Modules \& NPM](#node-modules--npm)
    - [Why Modules?](#why-modules)
    - [What are modules?](#what-are-modules)
    - [Node Modules - What and Where?](#node-modules---what-and-where)
    - [Using your own modules](#using-your-own-modules)
    - [Using your own modules - named exprots](#using-your-own-modules---named-exprots)
  - [NPM - Node Package Manager](#npm---node-package-manager)
    - [Package Dependencies](#package-dependencies)
  - [Node Server](#node-server)
    - [Why create a server?](#why-create-a-server)
    - [What is a server?](#what-is-a-server-1)
    - [How do servers work?](#how-do-servers-work)
    - [An intro to Event Emitters](#an-intro-to-event-emitters)
  - [Streams](#streams)
    - [Types of streams](#types-of-streams)
  - [Postman](#postman)
    - [What is Postman and why would I use it?](#what-is-postman-and-why-would-i-use-it)
    - [Server example with pseudocode](#server-example-with-pseudocode)
  - [Asynchronicity in Node](#asynchronicity-in-node)
    - [Roadmap](#roadmap)
    - [Codesmith wants to change their website](#codesmith-wants-to-change-their-website)
      - [Tasks](#tasks)
    - [Set up environment](#set-up-environment)
    - [Connect to the DB](#connect-to-the-db)
    - [Fetch the md file](#fetch-the-md-file)
    - [Save the new article to the databse](#save-the-new-article-to-the-databse)
    - [Database.js](#databasejs)
    - [What's wrong with this?](#whats-wrong-with-this)
  - [What is a Promise?](#what-is-a-promise)
    - [Under the hood](#under-the-hood)
    - [Promise Instance](#promise-instance)
    - [Chaining Promises](#chaining-promises)
  - [Error Handlers](#error-handlers)


## What is a server? 

A server is just a piece of software that can take a request and sends a response back.

## What is Node? 

Node is an open-source cross-platform **runtime environment** for Javascript built by the Linux foundation.

Node is built on **V8**, the engine originally created for Chrome.

Node can do so much more than JS in the browser, such as make files, delete them, kill processes, shut down the computer, system calls, listen to a port, etc. **It is not sandboxed.**

### Why is Node.js a good idea?

- It's relatively high level
- Its the same language as the browser, reducing cognitive overhead
- It's **non-blocking**. Great for I/O bound applications
- NPM is awesome!

### Javascript in the browser

- JS Ecosystem is made up 
  - JS runtime
  - Event Loop
  - Queue(s)
- We can pass off time consuming/complex tasks to Web APIs to keep the JS thread from blocking for long periods of time
- The Web API pushes any delayed functionality onto the callback queue once the long/complex task completes
- The event loop is responsible for clearing the callback queue at the appropriate time
  
### Javascript in Node

- Node uses Chrome V8 engine for the JS runtime, but does NOT rely on it's event loop or callback queue.
- Instead, it uses the **libuv** library to handle the event loop, callback queue (event queue), and also for background I/O operations.

![](Images/node1.png)


### How is Node different from JS in the browser?

- Node has NO Web API, no window, document, nav, etc.
- Node instead has its own system-related globals like _dirname _, _filename, and process.
- Node is still built on top of an event loop, and has functions/objects like setTimeout and console, but their underlying implementation is different.


## Node Modules & NPM

[...] check slides

### Why Modules?

- Enables Node to be lightweight and flexible

[...]

### What are modules? 

[...]

For example, if I want to build a web server, I might import Node's build in http module:

```js
const http = require('http');
```

### Node Modules - What and Where?

![](Images/nodmod.png)

### Using your own modules

![](Images/usingmodules.png)

### Using your own modules - named exprots

```js

// counter.js

let i = 0;

function counter() {
  return ++1;
}

function countByTwo() {
  return i += 2;
}

module.exports = {counter, countByTwo};
```

```js
// index.js

const {counter, countByTwo} = require('./counter.js');

console.log(counter()); // in console: 1
console.log(counter()); // in console: 2
console.log(countByTwo()); // in console: 4
console.log(countByTwo()); // in console: 6
console.log(i); // in console: Error
```

## NPM - Node Package Manager

![](Images/npm.png)

[...]
[...]

### Package Dependencies

![](Images/packagedep.png)


## Node Server

### Why create a server?

- Fetch data from other services (fb,twitter)
- Save/fetch data from our own database
- Process large quantities/complex data outside the browser

### What is a server?

![](Images/server?.png)

### How do servers work? 

- Servers listen for requests on a specified port
  - They can even listen for specific methods and/or requests to specific routes (endpoints)
- Depending on the method and route (endpoint) specified in the request, a server may or may not process the request in some way
- In the end, the server will *respond* to the request with a status (success/failure) and [optionally] some data


### An intro to Event Emitters

- A type of class which enables attaching specific funcionality to a particular event
- Think about events on the browswer, such as button click, and attaching a listener to that button with specific functionality to run

```js

// first example of a server

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('action-occured', function() {
  console.log('I heard the action');
});

function action() {
  myEmitter.emit('action-occured');
}

action();
```

Node's **http** module, used for creating servers, is an example of an event emitter with a specific API.

```js

// first example of a server

const http = require('http');
const server = http.createServer();

server.on('request', (request, response) => {
  console.log('request received');
  let body = [];
  request.on('data', chunk => body.push(chunk));
  request.on('end', () => {
    body = Buffer.concat(body).toString();
    console.log(`Received body of request: ${body}`);
  });
});

server.listen('3000', () => {
  console.log('Listening on port 3000');
});
```

## Streams

### Types of streams

![](Images/typesofstreams.png)

## Postman

Download Postman!!!

### What is Postman and why would I use it?

- A robust tool for testing your server 
- [...]


### Server example with pseudocode

![](Images/vsser.png)

## Asynchronicity in Node

###  Roadmap

- Callbacks
- How Promises help us avoid callback hell
- Promise.all for parallel promise execution
- Introduce async/await syntax

### Codesmith wants to change their website
####  Tasks
1. Connect to DB
2. Obtain a markdown file from the file system
3. Save new article to the database


### Set up environment

```js
const path = require('path');
const fs = require('fs');
const markdown = require('markdown');
```

### Connect to the DB

![](Images/step1.png)

### Fetch the md file

![](Images/step2.png)

### Save the new article to the databse

![](Images/step3.png)

### Database.js

![](Images/db.js.png)


### What's wrong with this?

- Hard to read and see what's going on!
  - The nesting is hard to follow! What if we had even more nesting?
  - One homogeneous looking block of code
- We aren't grouping related code together.
  - Error handling happen separately in each callback!
- Independent/concurrent asynchronous activity isn't performed simulataneously!




## What is a Promise? 

![](Images/promise.png)


### Under the hood

![](Images/hoodPromises.png)

### Promise Instance

![](Images/promiseinstance.png)

### Chaining Promises

![](Images/chainingpromises.png)

## Error Handlers

![](Images/errorhandlers.png)

