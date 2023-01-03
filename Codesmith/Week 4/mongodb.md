# MongoDB


[...]


### MongoDB Document Store

![](images/mongo1.png)

Built for speed

1. Ability to store an array of items: this is *embedding* and is an alternative to a foreign-key relationship
2. Flexibility in field properties and nesting, just like JSON. Great for unstructured/nested data

![](images/mongo2.png)

### Nesting

![](images/mongo3.png)

## Mongoose

Mongoose is the interface for MongoDB

### Mongoose Library Features

![](images/mongo4.png)

```js
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {type: String, required: true},
  age: Number,
  quote: String,
  data: Mixed
});

const Person = mongoose.model('Person', personSchema);
```

![](images/mongo5.png)

![](images/mongo6.png)


## CRUD in Mongoose

### Read

- Find an array of items matching the conditions object

```js
// callback style
Model.find(conditions, [projection], [options], callback);

// promise style
Model.find(conditions, [projection], [options]) . then(...);
```

![](images/mongo7.png)

### Model.find vs Model.findOne

![](images/moongo8.png)

### Create

**Two syntax options:**

Model.prototype.save 

*and*

Model.create (use this)


![](images/mongocreate.png)


You can use Model.create on an array of objects

### Delete


![](images/mongodeletee.png)


![](images/mongodelete2.png)

### Update

![](images/mongoupdate.png)

