// ----------------------------------------
//  *********** DESSERT ROUTES ************
// ----------------------------------------

const { Dessert } = require("../models/index");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

module.exports = app => {
    app.get("/desserts", async (req, res) => {
        try {
            const allDesserts = await Dessert.findAll({ order: [['updatedAt', 'DESC']] });
            res.json(allDesserts);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            });
        }
    });

    app.post("/desserts", ensureAuthenticated, async (req, res) => {
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

    app.put("/desserts/:id", ensureAuthenticated, async (req, res) => {
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

    app.delete("/desserts/:id", ensureAuthenticated, async (req, res) => {
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
};
