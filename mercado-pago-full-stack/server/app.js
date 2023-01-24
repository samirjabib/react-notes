const express = require('express')
const morgan = require('morgan')
const mercadopago = require('mercadopago')
const cors = require('cors')

const app = express()


app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.post("/payment", (req, res) => {
    res.status(200).json('working')
})


app.listen(3001, () => {
    console.log('server is running on port 3001')
})