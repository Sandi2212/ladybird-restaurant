// ----------------------------------------
//  ************ WINE ROUTES **************
// ----------------------------------------

const { Wine } = require('../models/index')

module.exports = app => {

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

}