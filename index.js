var app = require('express')()

app.get('/', (req,res)=>{
    res.send('Hello, world test')
})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})
