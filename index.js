const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser');
const port = process.env.SERVER_PORT || 3000;

const app = express();

const userRoute = require('./routes/userRoute');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB with updated options
mongoose.connect('mongodb://127.0.0.1:27017/posapi', {
  //useFindAndModify: false, // Removed deprecated option
  //useNewUrlParser: false, // Removed deprecated option
  //useUnifiedTopology: false// Kept required option
})
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started and running on ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the application on connection error
  });

app.get('/test-api', (req, resp) => {
  return resp.json({ 'message': 'Server started' });
});

app.use('/api/v1/user',userRoute)



