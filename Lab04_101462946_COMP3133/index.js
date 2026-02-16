const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/UsersRoutes');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log(`MongoDB connected ${success}`)
}).catch(err => {
  console.log(`Error while MongoDB connection ${err}`)
});

app.use(usersRouter);

app.listen(8081, () => { console.log('Server is running...') });