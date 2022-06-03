const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const port = 4000;
app.listen(port, function(){
    console.log('Server running on port', port)
});

app.get('/',function(req, res){
    res.send('this is the home page')
})