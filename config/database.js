const { Sequelize } = require('sequelize');

// Define your MySQL connection details
const sequelize = new Sequelize('shubh', 'root', 'shubh@123', {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log, // Optional: Log SQL queries to the console
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
