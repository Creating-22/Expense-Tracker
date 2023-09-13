const express=require('express');
const cors=require('cors');
const {db}=require('./db/db');
const {readdirSync}=require('fs');
const {router}=require('./routes/transactions')
const app=express()

require('dotenv').config()
const PORT=process.env.PORT

app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
    res.send('hello world');
})
//routes
readdirSync('./routes').map((route => app.use('/api/v1',require('./routes/'+ route))))

const server=()=>{
    db();
    app.listen(PORT,()=>{
        console.log("hello",PORT);
    })
    

}
server()