

const express = require('express')
const path = require('path');
const app = express()
const port = 3000

// const abdullahMiddleware = (req, res, next) => {
//     console.log(req);
// }

// app.use(abdullahMiddleware)

// This is having the get request as "/"
app.use(express.static(path.join(__dirname, "public")));

// app.get('/hello', (req, res) => {
//   res.send('Hello World!')
// })

// I want to send another parameter let's say name

app.get('/hello/:name', (req, res) => {
    res.send('Hello World! ' + req.params.name);
})

// Now this "http://localhost:3000/hello/Abdullah" will print "Hello World Abdullah"

app.get(`/about`, (req, res) => {
    res.send("<h1>This is an about page</h1>");
})
app.get('/template', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})