// ----------------------------------------
//  ********** COCKTAIL ROUTES ***********
// ----------------------------------------

const { Cocktail } = require("../models/index");

module.exports = app => {

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

}