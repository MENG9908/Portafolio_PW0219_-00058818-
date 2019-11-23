var express = require('express');
var router = express.Router();
var EnfermedadesController = require('../controller/api/EnfermedadesController');

/* GET home page. */
router.get('/', function(req, res, next) {
  usuarioProductoController.LoadIndex(req,res,next);
//  res.render('index', { title: 'Express' });
});

module.exports = router;
