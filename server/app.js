const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');

app.use('/api/', routes);

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});
