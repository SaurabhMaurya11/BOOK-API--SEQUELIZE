const express = require('express');
const cors = require('cors');

const app = express()

var corOptions = {
    origin: 'https://localhost:5000'
}

//middleware
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

// routers
const router = require('./routes/bookRouter.js')
app.use('/api/books',router)


//testing api
app.get('/',(req,res)=>{
    res.json({message: 'hello from API....'})
})

//Port
 const PORT = process.env.PORT || 5000

 //Server
 app.listen(PORT,()=>{
    console.log(`Server is running port ${PORT}`)
 })
