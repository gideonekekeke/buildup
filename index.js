const express = require('express')
const port = process.env.PORT || 5030


const app = express()
app.use(express.json())


app.get('/', (req, res)=>{
    res.send('Api is ready and running...')
})
app.listen(port,()=>{
    console.log('listening on port');
})