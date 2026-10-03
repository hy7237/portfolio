const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const cors=require('cors');
const app=express();
const contactRoutes=require('./routes/contact.route');
const connectToDb=require('./db/db');
app.use(cors());
app.use(express.json());
app.use('/api',contactRoutes);
connectToDb();

app.get("/", (req, res) => {
    res.send("Portfolio Backend is Running");
});

module.exports=app;
