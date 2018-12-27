const { db } = require('./index'); // this way as well const { db, Page, User } ?
const Page = require('./models/page');
const User = require('./models/user');

const pages = [
  {
    title: "1941 - DiMaggio's Streak",
    slug: '1941dimaggiosstreak',
    content:
      'There are few records that people believe will never be broken, and Joe DiMaggio’s 56 game hitting streak is one of them. DiMaggio’s streak included, a .408 batting average, 15 home runs, and 55 runs batted in. The Yankees’ success that year is largely attributed to his stellar season at the plate. After finishing the season with over 100 wins, the Yankees defeated the Brooklyn Dodgers in five games to claim yet another World Series championship.',
    status: 'closed',
    tags: ['yankees', 'baseball', 'sports']
  },
  {
    title: 'Ice Cream in the City',
    slug: 'icecream',
    content:
      "Do you prefer soft serve to a scoop? Gelato over sorbet? Something spicy and sour instead of sweet and salty? You might even want an old fashioned hot fudge sundae. No matter your frozen preference, you can find it in one of New York City's diverse ice cream shops.",
    status: 'open',
    tags: ['ice-cream', 'summer', 'nyc']
  }
];

const users = [
  {
    name: 'Juan Jose Maria Champagne',
    email: 'juanjose@champagne.com'
  },
  {
    name: 'Pepita Blue Ocean',
    email: 'pepita@blueocean.com'
  }
];

const seed = () =>
  Promise.all(pages.map(page => Page.create(page))).then(() =>
    Promise.all(users.map(user => User.create(user)))
  );

const main = () => {
  console.log('Syncing database...');
  db.sync({ force: true })
    .then(() => {
      console.log(`
          Seeding successful!
      `);
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
