const express = require('express')
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const connectDB = require('./config/db')

const app = express()

app.use(express.json())
dotenv.config()
connectDB()
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.use('/api/users', userRoutes)
app.use('/api/admins', adminRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})