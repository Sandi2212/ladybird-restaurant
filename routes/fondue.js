// ----------------------------------------
//  *********** FONDUE ROUTES ************
// ----------------------------------------

const { Fondue } = require("../models/index");

module.exports = app => {

    app.get("/fondues", async (req, res) => {
        try {
            const allFondues = await Fondue.findAll();
            res.json(allFondues);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            });
        }
    });

    app.post('/fondues', async (req, res) => {
        try {
            await Fondue.create(req.body);
            res.send(true);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            });
        }
    });

    app.put('fondues/:id', async (req, res) => {
        try {
            const fondueToUpdate = await Fondue.findByPk(req.params.id);
            await fondueToUpdate.update(req.body);
            res.send(true);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            });
        }
    });

    app.delete('fondues/:id', async (req, res) => {
        try {
            const fondueToRemove = await Fondue.findByPk(req.params.id);
            await fondueToRemove.destroy();
            res.send(true);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            });
        }
    });

}