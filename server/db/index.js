const db = require('./db');
const Page = require('./models/page');
const User = require('./models/user');

// associations - this adds methods to 'Page', such as '.setAuthor'. It also creates a foreign key attribute on the Page table pointing to the User table
Page.belongsTo(User, { as: 'author' });
// User.hasMany(Page, { foreignKey: 'authorId' });
// Remember to import this file instead of the models (trick with Chris)

module.exports = {
  db,
  Page,
  User
};
