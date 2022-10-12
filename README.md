# Nodejs with Irene
### Day Two
- Create a simple server with JS, NodeJS and express
- Following the tutorial below
  - [javascript-express-hello-world](https://wsvincent.com/javascript-express-hello-world/)

### Day Three
- The strcuture of an express application 
  -   - [Express explained w/ examples - instalaltion - routing - middleware ](https://www.freecodecamp.org/news/express-explained-with-examples-installation-routing-middleware-and-more/)
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
    - [Code beautify -> html-to-pug-converter](https://codebeautify.org/html-to-pug-converter)

### Day Seven
- Adding images, js and css to our pug files
- app.use(express.static(path.join(__dirname, 'public')))
  - this loads any images, css, js and other files you may want in your project
  - it sets the default directory for all these files in the public directory
  - no need o reference the directory when linking css or images for examples
- app.use('/public/images', express.static(__dirname + '/public/images')) 
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
- [ ] Assignment: Read about the MVC (model views controller) structure
  - [MVC Architecture - GeeksforGeeks](https://www.geeksforgeeks.org/model-view-controllermvc-architecture-for-node-applications/)
- [ ] Assignment: Add more Pug files to your project
  - [ ] Push your files to GitHub
  - [ ] Share the link to the repo

#### Further study
  - [what-is-node-js](https://kinsta.com/knowledgebase/what-is-node-js/#:~:text=a%20word%3A%20no.-,Node)
  - [REST api introduction](https://www.geeksforgeeks.org/rest-api-introduction/)