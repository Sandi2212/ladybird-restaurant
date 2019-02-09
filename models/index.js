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
    values: ['white', 'rose', 'red']
  },
  varietal: Sequelize.STRING,
  vineyard: Sequelize.STRING,
  year: {
    type: Sequelize.INTEGER,
    len: [4,4],
  },
  glass_price: Sequelize.INTEGER,
  bottle_price: Sequelize.INTEGER,
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

module.exports = {db, Cocktail}