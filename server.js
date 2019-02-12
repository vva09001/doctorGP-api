const express = require('express');
const app = express();

app.listen(4000, ()=> {console.log("Sever running")});
app.get('/', (req, res) => {
    res.send('doctorGP-api');
  });