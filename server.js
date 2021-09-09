const express = require('express');
const app = express();

// tell our server how to handle a GET request
// We can use the req object to read data about what the client is requesting to do.
app.get('/', (req,res) => {res.send('Nailed it!')});

app.listen(3000, () => console.log('my express-web-server is listening on port 3000'));


