const express = require("express");
const path = require("path");
const hbs = require('hbs');


const app = express();
const port = process.env.PORT || 3000 ;

const st_path = path.join(__dirname, "../public");
const partial_path = path.join(__dirname, "../templates/partials");
const temp_path = path.join(__dirname, "../templates/views");

app.set('view engine' , 'hbs');
app.set('views' , temp_path);
hbs.registerPartials(partial_path);

app.use(express.static(st_path));

app.get('/', (req , res) => {
    res.render("index");
});

app.get('/weather', (req , res) => {
    res.render("weather");
});
app.get('/about', (req , res) => {
    res.render("about");
});
app.get('*', (req , res) => {
    res.status(400).render("404err");
});


app.listen(port , () => {
    console.log("Server acivated");
})