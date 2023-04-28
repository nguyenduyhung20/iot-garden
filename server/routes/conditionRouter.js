const express = require('express');
const conditionController = require('../controllers/conditionController');

const router = express.Router();

router.post('/', conditionController.createCondition);
router.get('/:gardenId', conditionController.getCondition);
router.put('/:gardenId', conditionController.updateCondition);
router.delete('/:gardenId', conditionController.deleteCondition);

module.exports = router;