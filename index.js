const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Server side!')
})

app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})