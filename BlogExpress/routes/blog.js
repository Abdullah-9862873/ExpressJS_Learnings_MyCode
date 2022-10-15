const express = require('express');
const path = require('path');
const blogs = require("../data/blogs");
const router = express.Router();

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, "../templates/blogHome.html"));
    res.render('home');
})

router.get('/blogs', (req, res) => {
    res.render('blogHome.handlebars', {
        blogs : blogs
    })
})

router.get('/blog', (req, res) => {
    blogs.forEach(e => {
        console.log(e.title);
    });
    res.sendFile(path.join(__dirname, "../views/index.html"));
})

router.get('/blogpost/:slug', (req, res) => {
    myBlog = blogs.filter(e => {
        return e.slug == req.params.slug;
    });
    res.render("blogPage.handlebars", {
        title : myBlog[0].title,
        content : myBlog[0].content
    })
    // res.sendFile(path.join(__dirname, `../views/${req.params.slug}.html`));
})



module.exports = router;