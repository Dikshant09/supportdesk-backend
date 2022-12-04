const path = require('path');
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8000;
const colors = require('colors');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes.js');
const ticketRoutes = require('./routes/ticketRoutes.js');
const { errorHandler } = require('./middleware/errorMiddleware.js');

// Connect to database
const { connectDB } = require('./config/db.js');
connectDB();

// Using middleware to get the data which is passed by user in post request : to Parse data
app.use(express.urlencoded({ extended: false }))

// Parse json
app.use(express.json());
app.use(cors({
    origin: process.env.REACT_FRONTEND_URL,
}))

// Routes
app.use('/api/users', userRoutes);
app.use('/api/tickets', ticketRoutes);

app.use(cors());
app.use(express.json());

// app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }))

app.use(errorHandler);

app.listen(port, () => {
    console.log('listening on port ' + port);
})