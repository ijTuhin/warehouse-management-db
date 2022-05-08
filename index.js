const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.envPORT || 5000;

//middleware
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server side!')
})

app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})