const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const climaRoutes = require('./routes/climaRoutes')

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', climaRoutes)

app.get('/', (req, res) => {
    res.send({ version: '1.0' })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});