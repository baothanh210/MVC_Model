const express = require('express');
const app = express();
const route = require('./routes');
const port = 8080;
app.set('view engine', 'ejs');

const db = require('./config/db');


// Connect to DB
db.connect();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
route(app);

app.listen(port, ()=>{
    console.log(`locallhost ${port}`)
})

