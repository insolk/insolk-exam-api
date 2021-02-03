const express = require('express')
const app = express();
const port = process.env.PORT||3000;
app.get('/service', (req, res)=>{
    var user_name = req.param('status');
    res.send('The system is running [Status: '+user_name.toUpperCase()+']');
});
app.listen(port, () =>console.log('Example app listening on port 3000'))