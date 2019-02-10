const {Wine, Beer, Cocktail, Food} = require('../models')

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
      {category: 'rose', varietal: 'ROSE ON TAP', glass_price: 10, bottle_price: 25, comment: 'ask your server for today\'s select rose! bottles are 500ml (3 glasses)'},
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
    console.log('🗂 ', 'seed complete')
  } catch (e) {
    console.log('‼️ ', e.message)
  }
  process.exit()
}

seed()