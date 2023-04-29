const gardenController = require('../controllers/gardenController');
const express = require('express');
const router = express.Router();

router.get('/', gardenController.getAllGardens);
router.get('/:id', gardenController.getGardenById);
router.get('/owner/:ownerId', gardenController.getGardenByOwnerId);
router.post('/', gardenController.addGarden);
router.delete('/:id', gardenController.deleteGarden);
router.put('/:id', gardenController.updateGarden);

module.exports = router;


