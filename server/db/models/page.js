const Sequelize = require('sequelize');
const db = require('../db');

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: [] // best to always add a default value of empty datatype
  }
});

// hook
Page.beforeValidate(page => {
  if (typeof page.tags === 'string') {
    page.tags = page.tags.split(',').map(str => str.trim());
  }
  if (!page.slug) {
    page.slug = page.title
      .replace(/\s/g, '_')
      .replace(/\W/g, '')
      .toLowerCase();
  }
});

const { Op } = Sequelize;

// class method
Page.findByTag = function(tag) {
  return this.findAll({
    where: {
      tags: { [Op.contains]: [tag] }
    }
  });
};

// instance method
// Page.prototype.findSimilar = function() {
//   return Page.findAll({
//     where: {
//       id: {
//         $ne: this.id
//       },
//       tags: { $overlap: this.tags }
//     }
//   });
// };

module.exports = Page;
