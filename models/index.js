const Sequelize = require('sequelize')
const dbName = 'ladybird_db'

const db = new Sequelize({
  database: dbName,
  dialect: 'postgres',
  define: {
    underscored: true
  }
})

const Cocktail = db.define('cocktail', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  small_price: Sequelize.INTEGER,
  large_price: Sequelize.INTEGER,
  ingredients: Sequelize.STRING,
  alcohol_free: Sequelize.BOOLEAN,
})

const Wine = db.define('wine', {
  category: {
    type: Sequelize.ENUM,
    values: ['white', 'rose', 'red', 'bubbles', 'dessert wine']
  },
  varietal: Sequelize.STRING,
  vineyard: Sequelize.STRING,
  region: Sequelize.STRING,
  year: {
    type: Sequelize.INTEGER,
    len: [4,4],
  },
  glass_price: Sequelize.INTEGER,
  bottle_price: Sequelize.INTEGER,
  comment: Sequelize.STRING,
})

const Beer = db.define('beer', {
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  brewery: Sequelize.STRING,
  region: Sequelize.STRING,
  container: Sequelize.STRING,
  oz: Sequelize.REAL,
  abv: Sequelize.REAL,
  price: Sequelize.INTEGER,
})

const Food = db.define('food', {
  name: Sequelize.STRING,
  ingredients: Sequelize.STRING,
  price: Sequelize.INTEGER,
  a_la_carte: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }
})

module.exports = {db, Wine, Beer, Cocktail, Food}