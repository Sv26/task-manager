const sequelize = require('../config/database');
const User = require('./user');
const Task = require('./task');

User.hasMany(Task, { foreignKey: 'userId' });
Task.belongsTo(User, { foreignKey: 'userId' });

sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

module.exports = { User, Task };
