const express = require('express')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))

const { Wine, Beer, Cocktail, Food, Fondue, Dessert } = require("./models/index")

app.get('/', (req, res) => {
  res.send("Welcome to Ladybird")
})

// ----------------------------------------
//  ************ WINE ROUTES **************
// ----------------------------------------

app.get('/wines', async (req, res) => {
  try {
    const allWines = await Wine.findAll();
    res.json(allWines);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
})

// ----------------------------------------
//  ************ BEER ROUTES **************
// ----------------------------------------

app.get('/beers', async (req, res) => {
  try {
    const allBeers = await Beer.findAll();
    res.json(allBeers);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
})

// ----------------------------------------
//  ********** COCKTAIL ROUTES ***********
// ----------------------------------------

app.get('/cocktails', async (req, res) => {
  try {
    const allCocktails = await Cocktail.findAll();
    res.json(allCocktails);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
})

app.listen(PORT, () => {
  console.log(`Express server is listening on port ${PORT}`)
})