import express from "express";

const app = express();
const port = 3000;
app.get("/",(req,res)=>{
    res.send("<h1>About me</h1><p>osos</p>")
});
app.get("/",(req,res)=>{
    res.send("<h1>About me</h1><p>phone:0106745544</p>")
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
