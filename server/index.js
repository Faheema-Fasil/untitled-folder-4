require('dotenv').config();
const express = require('express');
const cors= require('cors');
const router=require('./Route/route')
require('./db/connection')
const app = express();
app.use(cors());
app.use(express.json());
app.use(router)


const PORT=5010

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
app.get('/', (req, res) => {
    res.send("hello")
})