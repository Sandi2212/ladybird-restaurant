// ----------------------------------------
//  ************ WINE ROUTES **************
// ----------------------------------------

const { Wine } = require("../models/index");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

module.exports = app => {
    app.get("/wines", async (req, res) => {
        try {
            const allWines = await Wine.findAll({ order: [['updated_at', 'DESC']] });
            res.json(allWines);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            });
        }
    });

    app.post("/wines", ensureAuthenticated, async (req, res) => {
        try {
            await Wine.create(req.body);
            res.send(true);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            });
        }
    });

    app.put("/wines/:id", ensureAuthenticated, async (req, res) => {
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
    });

    app.delete("/wines/:id", ensureAuthenticated, async (req, res) => {
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
    });
};
