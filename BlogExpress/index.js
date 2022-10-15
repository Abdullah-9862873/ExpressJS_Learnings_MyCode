const express = require('express')
var exphbs  = require('express-handlebars');
var hbs = exphbs.create({ /* config */ });
const path = require('path');
const app = express()
const port = 3000

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, "static")));
app.use('/', require(path.join(__dirname, "routes/blog.js")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

