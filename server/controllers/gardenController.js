const gardenModel = require('../models/gardenModel')

const createDefaultGarden = (userId) => {
    return new Promise((resolve, reject) => {
        const defaultGarden = {
            garden_OwnerID: userId,
            garden_Location: 'Default location',
            garden_Name: 'Default Garden',
            garden_Description: 'Default',
            garden_Area: 0,
            url: 'Default'
        };
        console.log('Adding garden to database');
        gardenModel.addGarden(defaultGarden, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

const getAllGardens = async (req, res) => {
    try {
        const gardens = await gardenModel.getAllGardens();
        res.json(gardens);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getGardenById = async (req, res) => {
    try {
        const id = req.params.id;
        const garden = await gardenModel.getGardenById(id);
        if (!garden) {
            return res.status(404).json({ error: 'Garden not found' });
        }
        res.json(garden);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getGardenByOwnerId = async (req, res) => {
    try {
        const ownerId = req.params.ownerId;
        const garden = await gardenModel.getGardenByOwnerId(ownerId);
        if (!garden) {
            return res.status(404).json({ error: 'Garden not found' })
        }
        res.json(garden);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const addGarden = async (req, res) => {
    try {
        const newGarden = await gardenModel.addGarden(req.body);
        res.json(newGarden);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteGarden = async (req, res) => {
    try {
        id = req.params.id;
        await gardenModel.deleteGarden(id);
        res.json({ message: 'Garden deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateGarden = async (req, res) => {
    try {
        id = req.params.id;
        body = req.body;
        await gardenModel.updateGarden(id, body);
        res.json({ message: 'Garden updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



module.exports = {
    createDefaultGarden,
    getAllGardens,
    getGardenById,
    getGardenByOwnerId,
    addGarden,
    updateGarden,
    deleteGarden
}