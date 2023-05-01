conditionModel = require('../models/conditionModel');

const createDefaultCondition = (gardenId) => {
    const defaultCondition = {
        amdat: 'default value',
        temp: 'default value',
        humid: 'default value',
        gardenId: gardenId
    };
    return conditionModel.createCondition(defaultCondition);
};


const createCondition = async (req, res) => {
    try {
        const condition = await conditionModel.createCondition(req.body);
        res.status(201).json({message: 'Condition created successfully', conditionId: condition.insertId});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while creating the condition' });
    }
}

const getCondition = async (req, res) => {
    try {
        const gardenId = req.params.gardenId;
        const condition = await conditionModel.getConditionByGardenId(gardenId);
        res.json(condition);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'An error occured while fetching the condition'});
    }
}

const updateCondition = async (req, res) => {
    try {
        const updatedData = { ...req.body, gardenId: req.params.gardenId};
        await conditionModel.updateCondition (updatedData);
        res.json({message: 'Condition updated successfully'});
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'An error occured while updating the condition'});
    }
}

const deleteCondition = async (req, res) => {
    try {
        const gardenId = req.params.gardenId;
        await conditionModel.deleteCondition(gardenId);
        res.json({ message: 'Condition deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while deleting the condition' });
    }
};

module.exports = {
    createCondition,
    getCondition,
    updateCondition,
    deleteCondition,
    createDefaultCondition
} 