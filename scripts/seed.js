const {Wine, Beer, Cocktail, Food, Fondue, Dessert} = require('../models')

const seed = async () => {
  try {
    await Wine.truncate({restartIdentity: true})
    await Wine.bulkCreate([
      {category: 'white', varietal: 'riesling', vineyard: 'selbach-oster', region: 'mosel, germany', year: 2014, glass_price: 13, bottle_price: 50},
      {category: 'white', varietal: 'hondarrabi zuri', vineyard: 'ameztol \'txabolia\'', region: 'pais vasco, spain', year: 2017, glass_price: 13, bottle_price: 50},
      {category: 'white', varietal: 'sauvignon blanc', vineyard: 'supernatural', region: 'hawke\'s bay, new zealand', year: 2014, glass_price: 15, bottle_price: 48},
      {category: 'white', varietal: 'fiano', vineyard: 'casetllo manaci', region: 'puglia, italy', year: 2015, glass_price: 14, bottle_price: 54},
      {category: 'white', varietal: 'chardonnay', vineyard: 'walt vineyards', region: 'sonoma coast, ca', year: 2014, glass_price: 16, bottle_price: 64},
      {category: 'white', varietal: 'chenin blanc', vineyard: 'kunin \'jurassic park\'', region: 'sonoma coast, ca', year: 2015, glass_price: null, bottle_price: 72},
      {category: 'white', varietal: 'riesling', vineyard: 'cobb \'vonarburg vineyard\'', region: 'anderson valley, ca', year: 2016, glass_price: null, bottle_price: 80},
      {category: 'white', varietal: 'carricante', vineyard: 'graci \'etna blanco arcuria\'', region: 'etna, sicily', year: 2015, glass_price: null, bottle_price: 95},
      {category: 'rose', varietal: 'getaria rose', vineyard: 'domaine des cassagnoles', region: 'gascogne, france', year: 2016, glass_price: 12, bottle_price: 46},
      {category: 'rose', varietal: 'etna rosato', vineyard: 'graci', region: 'etna, sicily', year: 2017, glass_price: 13, bottle_price: 50},
      {category: 'rose', varietal: 'bekaa valley jeune', vineyard: 'chateau musar', region: 'bekaa valley, lebanon', year: 2016, glass_price: 14, bottle_price: 54},
      {category: 'rose', varietal: 'rose on tap', glass_price: 10, bottle_price: 25, comment: 'ask your server for today\'s select rose! bottles are 500ml (3 glasses)'},
      {category: 'red', varietal: 'pinot noir', vineyard: 'copain \'tous ensemble\'', region: 'sonoma coast, ca', year: 2016, glass_price: 16, bottle_price: 62},
      {category: 'red', varietal: 'grenache', vineyard: 'tim smith \'bugalugs\'', region: 'barossa valley, australia ', year: 2017, glass_price: 12, bottle_price: 46},
      {category: 'red', varietal: 'trepat', vineyard: 'moli dels capellans \'la coma\'', region: 'catalonia, spain', year: 2016, glass_price: 14, bottle_price: 55},
      {category: 'red', varietal: 'rhone blend', vineyard: 'fausse piste \'mourvedre, syrah, grenache\'', region: 'columbia valley, wa', year: 2016, glass_price: 13, bottle_price: 58},
      {category: 'red', varietal: 'malbec', vineyard: 'cosse et maisonneuve \'le combal\'', region: 'cahors, france', year: 2014, glass_price: 15, bottle_price: 58},
      {category: 'red', varietal: 'syrah', vineyard: 'la clarine farm \'sierra foothills\'', region: 'el dorado county, ca', year: null, glass_price: null, bottle_price: 64},
      {category: 'red', varietal: 'cabernet franc', vineyard: 'leah jorgensen cellars \'tour rain\'', region: 'walla walla valley, wa', year: 2016, glass_price: null, bottle_price: 78},
      {category: 'red', varietal: 'pinot noir', vineyard: 'timbre \'lead vocals; bien nacido\'', region: 'santa maria valley, ca', year: 2015, glass_price: null, bottle_price: 92},
      {category: 'bubbles', varietal: 'prosecco', vineyard: 'case paolin', region: 'asolo prosecco, italy', year: null, glass_price: 14, bottle_price: 54},
      {category: 'bubbles', varietal: 'cava rose', vineyard: 'dibon', region: 'cava, spain', year: null, glass_price: 12, bottle_price: 42},
      {category: 'bubbles', varietal: 'blanc de blanc', vineyard: 'raventos', region: 'catalonia, spain', year: 2014, glass_price: 13, bottle_price: 52},
      {category: 'dessert wine', varietal: 'harslevelu', vineyard: 'chateau pajzos \'takaji late harvest h\'', region: 'tokai, hungary', year: 2014, glass_price: 14, bottle_price: 28},
      {category: 'dessert wine', varietal: 'moscato', vineyard: 'la spinetta \'d\' asti biancospino\'', region: 'piedmont, italy', year: 2017, glass_price: null, bottle_price: 22, comment: '*half bottle'},
    ])
    await Beer.truncate({restartIdentity: true})
    await Beer.bulkCreate([
      {category: 'beer', name: 'vliet pilsner', brewery: 'threes brewing', region: 'brooklyn, ny', container: 'can', oz: 16, abv: 5.2, price: 12},
      {category: 'beer', name: 'dry hopped lager', brewery: 'green\'s gluten free', region: 'england, uk', container: 'bottle', oz: 16.9, abv: 4.1, price: 14},
      {category: 'beer', name: 'forever ever ipa', brewery: 'other half brewing', region: 'brooklyn, ny', container: 'draft', oz: 10, abv: 4.7, price: 9},
      {category: 'boozy kombucha', name: 'the original', brewery: 'kombrewcha', region: 'brooklyn, ny', container: 'draft', oz: 10, abv: 3.2, price: 9},
      {category: 'cider', name: 'pineapple cider', brewery: 'austin eastciders', region: 'austin, tx', container: 'can', oz: 12, abv: 5, price: 8},
      {category: 'cider', name: 'field & flowers', brewery: 'graft', region: 'newburgh, new york', container: 'can', oz: 12, abv: 6.9, price: 8},
    ])
    await Cocktail.truncate({restartIdentity: true})
    await Cocktail.bulkCreate([
      {name: 'shearwater spritz', ingredients: 'sparkling rose, cucumber flowers, watermelon sugar rim', small_price: 12, large_price: null},
      {name: 'red rail', ingredients: 'bell pepper, pineapple, pomegranate molasses, sherry, lime, hellfire bitters', small_price: 13, large_price: null},
      {name: 'grapefruit bittern', ingredients: 'hopped bitters, grapefruit, lemon, lillet blanc', small_price: 13, large_price: 32},
      {name: 'sharp tailed grouse', ingredients: 'orange, pineapple gum, lemon, manzanilla & pedro ximenez sherry', small_price: 13, large_price: 32},
      {name: 'madagascar partridge', ingredients: 'cocchi americano, orange bitters, umenoyado shuzo yuzushu, fino sherry, grenache', small_price: 13, large_price: 32},
      {name: 'reunion ibis', ingredients: 'basil, cucumber, strawberry, smoked bitters, lemon, reisling', small_price: 14, large_price: 35},
      {name: 'the black swan', ingredients: 'hellfire bitters, strawberry infused bonal, lime, kombucha', small_price: 14, large_price: 35},
      {name: 'red junglefowl', ingredients: 'dolan blanc vermouth, oloroso sherry, cane sugar, raspberry, smoked bitters', small_price: 13, large_price: null},
      {name: 'paradise parrot', ingredients: 'pear, rosemary, lemon, sea salt, gruner veltliner', small_price: null, large_price: 35},
      {name: 'coppery thorntail', ingredients: 'cucumber, cappelletti aperitivo, grapefruit, rose, lime', small_price: null, large_price: 35},
      {name: 'ginger mockingbird', ingredients: 'ginger syrup, lemon, lime, club soda', small_price: 10, large_price: null, alcohol_free: true},
      {name: 'the basil swift', ingredients: 'basil, passionfruit, lemon, soda', small_price: 10, large_price: null, alcohol_free: true},
    ])
    await Food.truncate({restartIdentity: true})
    await Food.bulkCreate([
      {name: 'Buffalo maitake buns', ingredients: 'Steamed bao, pickled celery, ranch', price: 5, a_la_carte: true},
      {name: 'Avocado toast', ingredients: 'Avocado, pickled onion, cilantro, serrano', price: 12},
      {name: 'Mushroom & onion toast', ingredients: 'Black garlic aioli, hon shimeji, pearl onion', price: 10},
      {name: 'Kale', ingredients: 'Pickled daikon, radish, puffed rice, black garlic', price: 11},
      {name: 'Beet ceviche', ingredients: 'Cilantro, avocado, chili & lime', price: 12},
      {name: 'Avocado', ingredients: 'Seaweed, fried avocado, shiso, black garlic-ponzu', price: 10},
      {name: 'Mushrooms', ingredients: 'Maitake, white button puree, pickled shimeji', price: 14},
      {name: 'Baby corn', ingredients: 'Blended herbs, fried baby corn, corn puree, chickpea-based parmesan, almonds', price: 11},
      {name: 'Brussels sprouts', ingredients: 'Endive, apple, quinoa, soy-truffle vinaigrette', price: 12},
      {name: 'Roasted sweet potato', ingredients: 'Scallion tempura, miso butter', price: 9},
      {name: 'Sun dried tomato tart', ingredients: 'Tomato rose vinaigrette, arugula, whipped cashew', price: 14},
      {name: 'Eggpalnt', ingredients: 'Tomato sauce, garlic-based ricotta, basil', price: 14},
    ])
    await Fondue.truncate({restartIdentity: true})
    await Fondue.bulkCreate([
      {name: 'Chardonnay & artichoke ', price: 38},
      {name: 'Mushroom & onion', price: 42},
      {name: 'Sun-dried tomato & basil', price: 40},
    ])
    await Dessert.truncate({restartIdentity: true})
    await Dessert.bulkCreate([
      {name: 'Chocolate fondue (for 2 - 3)', ingredients: 'Served with assorted accoutrements', price: 24},
      {name: 'Dessert flight', ingredients: 'Chocolate & peanut butter mousse, strawberry cheesecake, macerated fresh berries', price: 14},
    ])
    console.log('🗂 ', 'seed complete')
  } catch (e) {
    console.log('‼️ ', e.message)
  }
  process.exit()
}

seed()