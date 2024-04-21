const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3030;

//middel ware 
app.use(cors())
app.use(express.json())
const user = [
  {
    id: 1,
    name: "polok",
    email: "polok@gmail.com",
    deferment:'computer',
  },
  {
    id: 2,
    name: "mohiuddin",
    email: "mohiu5204@gmail.com", deferment:'computer',
  },
  {
    id: 3,
    name: "mahir",
    email: "mahir@gmail.com", deferment:'computer',
  },
];

app.get("/", (req, res) => {
  res.send("User management server system is running");
});
app.get('/user',(req,res)=>{
    res.send(user)
})

app.post('/user',(req,res)=>{
    console.log('data hit from clint')
    console.log(req.body)
    const newuser=req.body;
    newuser.id=user.length +1;
    user.push(newuser)
})

app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
