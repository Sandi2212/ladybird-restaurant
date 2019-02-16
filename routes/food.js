// ----------------------------------------
//  ************* FOOD ROUTES *************
// ----------------------------------------

const { Food } = require("../models/index");

module.exports = app => {

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

}