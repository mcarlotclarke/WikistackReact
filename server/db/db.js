const Sequelize = require('sequelize');

const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/wikistack-react',
  {
    logging: false // omits logs
  }
);

module.exports = db;
