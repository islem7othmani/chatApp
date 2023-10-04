const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data');
const connectDB = require('./Config/db');
const userRoutes = require('./routers/auth'); // Corrected import path
const cors = require('cors');


const app = express();
dotenv.config();
connectDB();
app.use(cors());  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', userRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
