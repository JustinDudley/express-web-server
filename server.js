const express = require('express');
const app = express();

// middleware
app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
  });


app.use('/request-type', (req, res, next) => {
    res.send('You put request-type in the url');
    console.log('Request type: ', req.method);
    next();
  });

// tell our server how to handle a GET request
// We can use the req object to read data about what the client is requesting to do.
app.get('/', (req,res) => {res.send('Nailed it!')});

app.listen(3000, () => console.log('my express-web-server is listening on port 3000'));

