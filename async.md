# Async Javascript

**Asynchronicity is the backbone of modern web development in Javascript**

Javascript is single threaded (one command executing at a time) and has a synchronous execution model (each line is executed in the order the code appears).

So what if we need to **wait some time before we can execute certain bits of code?** Perhabs we need to wait on fresh data from an API/server request or for a timer to complete then execute our code.

We have a conundrum - a tension between wanting to **delay some code execution but not wanting to block the thread** from any further code running while we wait.