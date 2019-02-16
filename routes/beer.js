// ----------------------------------------
//  ************ BEER ROUTES **************
// ----------------------------------------

const { Beer } = require("../models/index");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

module.exports = app => {
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

    app.post("/beers", ensureAuthenticated, async (req, res) => {
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

    app.put("beers/:id", ensureAuthenticated, async (req, res) => {
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

    app.delete("beers/:id", ensureAuthenticated, async (req, res) => {
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
};
