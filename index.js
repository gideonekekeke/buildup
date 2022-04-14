require('dotenv').config()
require("./config/db.js")
const express = require('express')
const port = process.env.PORT || 5030
const myRouter = require("./Router/router")

const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors({origin : "*"}))

const myRouter2 = require("./Router/router2")

app.use("/api", require("./Router/router2"))
app.use("/api", myRouter)


app.get('/', (req, res)=>{
    res.send('Api is ready and running...')
})
app.listen(port,()=>{
    console.log('listening on port');
})