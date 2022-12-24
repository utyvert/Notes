# Express

## Express Approach Lecture

### Data Flow

![](Images/dataflowexp.png)

### Server

![](Images/expserv.png)

### Routes 
[...]

### Middleware
- Built in middleware:
  - express.static() - serves static files (HTML, CSS, images, vanilla JS)
  - express.json() - parses incoming request body from JSON to JS
  - express.urlencoded() - parses incoming request with url-encoded payloads, 'application/urlencoded' - mainly seen in form submissions
- Custom middlware

### Controllers

- Objects that hold custom middleware [...]
- Always return next()

### Route Parameters

![](Images/routeparameters.png)

### Best Engineering Practices

![](Images/bestpracexp.png)


## Code Review

### server.js

![](Images/code1.png)

### server.js pt 2

![](Images/code2.png)


### api.js

![](Images/apijs.png)

### characterController.js

![](Images/charcontro.png)

### characters.js

![](Images/charactersjs.png)

