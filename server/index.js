// server entry point
const app = require('./app');
const db = require('./db/db');
const port = process.env.PORT || 1337; // TODO change to 3000

const init = async () => {
  await db.sync();
  console.log('db synced');
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

init();

// various ways to sync db and start server
// db.sync()
//   .then(function() {
//     app.listen(port);
//   });

// app.listen(port, function() {
//   console.log('Knock, knock');
//   console.log("Who's there?");
//   console.log(`Your server, listening on port ${port}`);
// });

// const init = async () => {
//   //sync creates the table if it does not exist. alter true creates the tables and makes any changes to keep the modules in sync
//   await models.User.sync({force: true})
//   await models.Page.sync({force: true})
//   server.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}!`);
//   });
// }

// init();

// const {db} = require('./server/db')
// const app = require('./server')
// const PORT = 1337

// db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
//   .then(() => {
//     console.log('db synced')
//     app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))
//   })
