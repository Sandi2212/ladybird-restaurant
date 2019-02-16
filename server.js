const express = require("express");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const passport = require("passport");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
require("./services/passport");

app.use(bodyParser.json());
app.use(morgan("dev"));
// configuration object is passed to cookie session
// configuration object expexcts 2 diff properties
// maxAge how long cookie can exist in browser before autamatically expiring
// keys to encrypt the cookie, provide additional security
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
        keys: [keys.cookieKey]
    })
);
//telling passport to use cookies to authenticate user
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.send("Welcome to Ladybird");
});

// oauth routes
require("./routes/authRoutes")(app);
const {
    Wine,
    Beer,
    Cocktail,
    Food,
    Fondue,
    Dessert
} = require("./models/index");

// ----------------------------------------
//  ************ WINE ROUTES **************
// ----------------------------------------

app.get("/wines", async (req, res) => {
    try {
        const allWines = await Wine.findAll();
        res.json(allWines);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
});

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

app.get("/beers", async (req, res) => {
    try {
        const allBeers = await Beer.findAll();
        res.json(allBeers);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
});

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

app.get("/cocktails", async (req, res) => {
    try {
        const allCocktails = await Cocktail.findAll();
        res.json(allCocktails);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
});

app.post('/cocktails', async (req, res) => {
  try {
    await Cocktail.create(req.body);
    res.send(true);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

app.put('cocktails/:id', async (req, res) => {
  try {
    const cocktailToUpdate = await Cocktail.findByPk(req.params.id);
    await cocktailToUpdate.update(req.body);
    res.send(true);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

app.delete('cocktails/:id', async (req, res) => {
  try {
    const cocktailToRemove = await Cocktail.findByPk(req.params.id);
    await cocktailToRemove.destroy();
    res.send(true);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

// ----------------------------------------
//  ************* FOOD ROUTES *************
// ----------------------------------------

app.get("/foods", async (req, res) => {
    try {
        const allFoods = await Food.findAll();
        res.json(allFoods);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
});

app.post('/foods', async (req, res) => {
  try {
    await Food.create(req.body);
    res.send(true);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

app.put('foods/:id', async (req, res) => {
  try {
    const foodToUpdate = await Food.findByPk(req.params.id);
    await foodToUpdate.update(req.body);
    res.send(true);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

app.delete('foods/:id', async (req, res) => {
  try {
    const foodToRemove = await Food.findByPk(req.params.id);
    await foodToRemove.destroy();
    res.send(true);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

// ----------------------------------------
//  *********** FONDUE ROUTES ************
// ----------------------------------------

app.get("/fondues", async (req, res) => {
    try {
        const allFondues = await Fondue.findAll();
        res.json(allFondues);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
});

app.post('/fondues', async (req, res) => {
  try {
    await Fondue.create(req.body);
    res.send(true);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

app.put('fondues/:id', async (req, res) => {
  try {
    const fondueToUpdate = await Fondue.findByPk(req.params.id);
    await fondueToUpdate.update(req.body);
    res.send(true);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

app.delete('fondues/:id', async (req, res) => {
  try {
    const fondueToRemove = await Fondue.findByPk(req.params.id);
    await fondueToRemove.destroy();
    res.send(true);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

// ----------------------------------------
//  *********** DESSERT ROUTES ************
// ----------------------------------------

app.get("/desserts", async (req, res) => {
    try {
        const allDesserts = await Dessert.findAll();
        res.json(allDesserts);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
});

app.post('/desserts', async (req, res) => {
  try {
    await Dessert.create(req.body);
    res.send(true);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

app.put('desserts/:id', async (req, res) => {
  try {
    const dessertToUpdate = await Dessert.findByPk(req.params.id);
    await dessertToUpdate.update(req.body);
    res.send(true);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

app.delete('desserts/:id', async (req, res) => {
  try {
    const dessertToRemove = await Dessert.findByPk(req.params.id);
    await dessertToRemove.destroy();
    res.send(true);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

app.listen(PORT, () => {
    console.log(`Express server is listening on port ${PORT}`);
});
