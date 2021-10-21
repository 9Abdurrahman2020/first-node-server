const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());
app.use(express.json())
const port = 5000;
const users =[
    {id: 0, name:'Rahman', email:'9abdurrahman2020@gmail.com'},
    {id: 1, name:'Akash', email:'Akash@gmail.com'},
    {id: 2, name:'Riyed', email:'Riyed@gmail.com'},
    {id: 3, name:'Rashed', email:'Rashed@gmail.com'},
    {id: 4, name:'Korim', email:'Korim@gmail.com'},
    {id: 5, name:'Mofiz', email:'Mofiz@gmail.com'},
    {id: 6, name:'Ripon', email:'Ripon@gmail.com'},
    {id: 7, name:'Rabbi', email:'Rabbi@gmail.com'},
];
app.get('/' , (req,res) =>{
    res.send('kire mama')
})
// dynamic api by search query 
app.get('/users', (req,res)=>{
    const search = req.query.search;
    if(search){
        const newUsers = users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(newUsers)
    }else{
        res.send(users)
    }
})
// dynamic api by id
app.get('/users/:id', (req,res) =>{
    const id = req.params.id;
    const newUser = users[id]
    res.send(newUser)
})
// get data from client side 
app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    res.json(newUser)
})

app.listen(port);