const {Wine, Cocktail, Food} = require('../models')

const seed = async () => {
  try {
    await Wine.truncate({restartIdentity: true})
    await Wine.bulkCreate([
      {category: 'white', varietal: 'riesling', vineyard: 'selbach-oster', region: 'mosel, germany', year: 2014, glass_price: 13, bottle_price: 50},
      {category: 'white', varietal: 'HONDARRABI ZURI', vineyard: 'ameztol \'txabolia\'', region: 'pais vasco, spain', year: 2017, glass_price: 13, bottle_price: 50},
      {category: 'white', varietal: 'SAUVIGNON BLANC', vineyard: 'supernatural', region: 'hawke\'s bay, new zealand', year: 2014, glass_price: 15, bottle_price: 48},
      {category: 'white', varietal: 'FIANO', vineyard: 'casetllo manaci', region: 'puglia, italy', year: 2015, glass_price: 14, bottle_price: 54},
      {category: 'white', varietal: 'CHARDONNAY', vineyard: 'walt vineyards', region: 'sonoma coast, ca', year: 2014, glass_price: 16, bottle_price: 64},
      {category: 'white', varietal: 'CHENIN BLANC', vineyard: 'kunin \'jurassic park\'', region: 'sonoma coast, ca', year: 2015, glass_price: null, bottle_price: 72},
      {category: 'white', varietal: 'RIESLING', vineyard: 'cobb \'vonarburg vineyard\'', region: 'anderson valley, ca', year: 2016, glass_price: null, bottle_price: 80},
      {category: 'white', varietal: 'CARRICANTE', vineyard: 'graci \'etna blanco arcuria\'', region: 'etna, sicily', year: 2015, glass_price: null, bottle_price: 95},
      {category: 'rose', varietal: 'GETARIA ROSE', vineyard: 'domaine des cassagnoles', region: 'gascogne, france', year: 2016, glass_price: 12, bottle_price: 46},
      {category: 'rose', varietal: 'ETNA ROSATO', vineyard: 'graci', region: 'etna, sicily', year: 2017, glass_price: 13, bottle_price: 50},
      {category: 'rose', varietal: 'BEKAA VALLEY JEUNE', vineyard: 'chateau musar', region: 'bekaa valley, lebanon', year: 2016, glass_price: 14, bottle_price: 54},
      {category: 'rose', varietal: 'ROSE ON TAP', glass_price: 10, bottle_price: 25, comment: 'ask your server for today\'s select rose! bottles are 500ml (3 glasses)'},
      {category: 'red', varietal: 'PINOT NOIR', vineyard: 'copain \'tous ensemble\'', region: 'sonoma coast, ca', year: 2016, glass_price: 16, bottle_price: 62},
      {category: 'red', varietal: 'GRENACHE', vineyard: 'tim smith \'bugalugs\'', region: 'barossa valley, australia ', year: 2017, glass_price: 12, bottle_price: 46},
      {category: 'red', varietal: 'TREPAT', vineyard: 'moli dels capellans \'la coma\'', region: 'catalonia, spain', year: 2016, glass_price: 14, bottle_price: 55},
      {category: 'red', varietal: 'RHONE BLEND', vineyard: 'fausse piste \'mourvedre, syrah, grenache\'', region: 'columbia valley, wa', year: 2016, glass_price: 13, bottle_price: 58},
      {category: 'red', varietal: 'MALBEC', vineyard: 'cosse et maisonneuve \'le combal\'', region: 'cahors, france', year: 2014, glass_price: 15, bottle_price: 58},
      {category: 'red', varietal: 'SYRAH', vineyard: 'la clarine farm \'sierra foothills\'', region: 'el dorado county, ca', year: null, glass_price: null, bottle_price: 64},
      {category: 'red', varietal: 'CABERNET FRANC', vineyard: 'leah jorgensen cellars \'tour rain\'', region: 'walla walla valley, wa', year: 2016, glass_price: null, bottle_price: 78},
      {category: 'red', varietal: 'PINOT NOIR', vineyard: 'timbre \'lead vocals; bien nacido\'', region: 'santa maria valley, ca', year: 2015, glass_price: null, bottle_price: 92},
      {category: 'bubbles', varietal: 'PROSECCO', vineyard: 'case paolin', region: 'asolo prosecco, italy', year: null, glass_price: 14, bottle_price: 54},
      {category: 'bubbles', varietal: 'CAVA ROSE', vineyard: 'dibon', region: 'cava, spain', year: null, glass_price: 12, bottle_price: 42},
      {category: 'bubbles', varietal: 'BLANC DE BLANC', vineyard: 'raventos', region: 'catalonia, spain', year: 2014, glass_price: 13, bottle_price: 52},
      {category: 'dessert wine', varietal: 'HARSLEVELU', vineyard: 'chateau pajzos \'takaji late harvest h\'', region: 'tokai, hungary', year: 2014, glass_price: 14, bottle_price: 28},
      {category: 'dessert wine', varietal: 'MOSCATO', vineyard: 'la spinetta \'d\' asti biancospino\'', region: 'piedmont, italy', year: 2017, glass_price: null, bottle_price: 22, comment: '*half bottle'},
    ])

    console.log('🗂 ', 'seed complete')
  } catch (e) {
    console.log('‼️ ', e.message)
  }
}

seed()