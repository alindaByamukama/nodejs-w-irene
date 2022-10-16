# Nodejs with Irene

### Day Two

- Create a simple server with JS, NodeJS and express
- Following the tutorial below
  - [javascript-express-hello-world](https://wsvincent.com/javascript-express-hello-world/)

### Day Three

- The strcuture of an express application
  - - [Express explained w/ examples - instalaltion - routing - middleware ](https://www.freecodecamp.org/news/express-explained-with-examples-installation-routing-middleware-and-more/)
- HTTP methods GET POST PUT DELETE
- REST api endpoints
- CRUD create read update delete

### Day Four

- Testing our endpoints with Postman
  - [Postman](https://www.postman.com/downloads/)
- How to use middleware
  - body parser --> process incoming data such as body payload - data received from client
  - session --> a session is often used in applications such as login/signup
  - time logger --> logs the time/date of each route change
    - can be used on specific routes

### Day Five

- [x] Assignment create a simple registration and landing page
- [Path params and Query strings](https://faun.pub/a-quick-look-into-path-parameters-and-query-strings-6e839110f9b)
- An example of path params & query strings at work
  - http://localhost:3000/users?class=node&cohort=12
- Getting HTML files
  - getting route for a file in the same directory
  - [__dirname] specifies the folder
  - on the form element we need the attributes action="/PATH" and method="post"

### Day Six

- write a simple PUG page
- URI (uniform resource identifier - name, location of both)
  - URL - uniform resource locator
  - URN - uniform resource name
- Pug - formaerly known as Jade
  - indentation mattersalot in Pug -> take care and be mindful
  - a node package that can be installed -> npm install pug
  - setup and usage of Pug
  - create files in Pug -> layout and registration
  - Pug converters -->
    - [HTML to Pug](https://html-to-pug.com/)
    - [Pug HTML](https://pughtml.com/)

### Day Seven

- Adding images, js and css to our pug files
- app.use(express.static(path.join(\_\_dirname, 'public')))
  - this loads any images, css, js and other files you may want in your project
  - it sets the default directory for all these files in the public directory
  - no need o reference the directory when linking css or images for examples
- app.use('/public/images', express.static(\_\_dirname + '/public/images'))
  - handles images you upload
- installation of the following dependecies into our project
  - npm install connect-ensure-login
  - npm install express-session
  - npm install multer
  - npm install mongoose
  - npm install passport
  - npm install passport-local
  - npm install passport-local-mongoose
  - npm install moment
- [x] Assignment: Read about the MVC (model views controller) structure
- [x] Assignment: Add more Pug files to your project
  - [x] Push your files to GitHub
  - [x] Share the link to the repo

### Day 8

- Appyling the MVC architecture in our project
- [What is a mdolue?](https://javascript.info/modules-intro)
- Setup the router file, exported it
  - const express = require("express");
  - const router = express.Router();
- Created a variable in the server file to access our routes
  - const registrationRoutes = require("./routes/regRoutes");
- Middleware that allows us to acces the routes in the router file in the browser
  - app.use("/user", registrationRoutes);

### Day 9

- Database Creation
  - Schema / Document / Collection
  - [Databases]()
- Import mongoose into the server -> this helps us to connect to mongodb without constantly opening it
- Create a config dir and a db.js file
  - then import the db file into the server
- setup db connections in server
- import passport into server and add middleware
  - passport will help with us authentication
  - and tracking authentication in our system
- import express-session and its middleware intot the server
- Models (MVC)
  - Create a user registration schema in your models file
  - a schema sets the design of your regstration in the db
  - see [What is a schema?](https://www.tutorialspoint.com/dbms/dbms_data_schemas.htm)
  - see [What is a collection?](hhttps://www.mongodb.com/docs/manual/core/databases-and-collections/)
  - see [What is a db/ collection/ document?](https://www.geeksforgeeks.org/mongodb-database-collection-and-document/)

### Day 10
- Learning about JS Async/Await, Callbacks, Promises by making ice cream -->
  - [JS Async-Await...](https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/)
- 



#### Resources

- [mongodb cheatsheet](https://www.mongodb.com/developer/products/mongodb/cheat-sheet/)
