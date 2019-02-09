const {db} = require('../models')

const reset = async () => {
  try {
    await db.sync({force: true})
    console.log('🗄 ', 'database reset')
  } catch (e) {
    console.log('‼️ ', e.message)
  }
  process.exit()
}

reset()