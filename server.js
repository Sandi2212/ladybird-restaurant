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

app.post('/wines', async (req, res) => {
  try {
    await Wine.create(req.body);
    res.send(true);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
})

app.put('wines/:id', async (req, res) => {
  try {
    const wineToUpdate = await Wine.findByPk(req.params.id);
    await wineToUpdate.update(req.body);
    res.send(true);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
})

app.delete('wines/:id', async (req, res) => {
  try {
    const wineToRemove = await Wine.findByPk(req.params.id);
    await wineToRemove.destroy();
    res.send(true);
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

app.post('/beers', async (req, res) => {
  try {
    await Beer.create(req.body);
    res.send(true);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

app.put('beers/:id', async (req, res) => {
  try {
    const beerToUpdate = await Beer.findByPk(req.params.id);
    await beerToUpdate.update(req.body);
    res.send(true);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

app.delete('beers/:id', async (req, res) => {
  try {
    const beerToRemove = await Beer.findByPk(req.params.id);
    await beerToRemove.destroy();
    res.send(true);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

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

// ----------------------------------------
//  ************* FOOD ROUTES *************
// ----------------------------------------

app.get('/foods', async (req, res) => {
  try {
    const allFoods = await Food.findAll();
    res.json(allFoods);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
})

// ----------------------------------------
//  *********** FONDUE ROUTES ************
// ----------------------------------------

app.get('/fondues', async (req, res) => {
  try {
    const allFondues = await Fondue.findAll();
    res.json(allFondues);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
})

// ----------------------------------------
//  *********** DESSERT ROUTES ************
// ----------------------------------------

app.get('/desserts', async (req, res) => {
  try {
    const allDesserts = await Dessert.findAll();
    res.json(allDesserts);
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