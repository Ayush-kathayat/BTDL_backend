import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 5050; // our port number the variable is stored in the config files the db connection string will be there too


const app = express();

app.use(cors()); // a middle ware which helps us so that we can share our resource to different origin basically its cors is a node.js package that allows cross-origin resource sharing

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));



//! just a simple check will remove it after making the routes delete this 

app.get('/', (req, res) => {
 res.send("Hello client how are you doing i am the server");
});
  

app.listen(PORT, () => {
  console.log(`server is listening on the port number ${PORT}`);
});
