const cors=require('cors')

const express=require('express')
const app=express()
app.use(cors())

app.use(express.json())

const configureDB=require('./config/database')
configureDB()
const routes = require('./config/router')
const port = process.env.PORT || 3076

app.use('/', routes)
app.use(express.json())

app.listen(port,()=>{
    console.log('server running in ',port);
})