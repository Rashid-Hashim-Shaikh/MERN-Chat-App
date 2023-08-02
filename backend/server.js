const express = require("express");
const dotenv = require("dotenv")
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")

// to access the .env files
dotenv.config();
connectDB();

const app = express();

// to accept json as request
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is Running succesfully")
})

app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server Started on Port ${PORT}`))