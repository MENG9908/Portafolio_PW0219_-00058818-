var express = require('express');
var router = express.Router();
var watchController = require('../controllers/EnfermedadesControllers');

router.get('/:modelo', watchController.getOne);
router.get('/', EnfermedadesController.getAll);
router.post('/',EnfermedadesController.register);
router.put('/:modelo', EnfermedadesController.updateWatch);
router.delete('/:modelo',EnfermedadesController.delete);

module.exports = router;