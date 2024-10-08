const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.send("How can I help you ?")
})

app.get('/rice', (req, res)=>{
    res.send("Here is your rice.")
})

app.get('/dosa', (req, res)=>{
    var customized_dosa = {
        sponge : true,
        greenChutney : true,
        quantity : 3,
        type : "plain "
    }
    res.send(customized_dosa);
})

app.listen(3000, ()=>{
    console.log("server is listening on port 3000")
})