var express = require('express');
var router = express.Router();

/* GET login. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */

router.get('/main.ejs', function(req, res, next) {
  res.render('main', { title: 'CASA' });
});

/* GET colegiado. */

router.get('/colegiado.ejs', function(req, res, next) {
  res.render('colegiado', { title: 'CASA' });
});

/* GET Traminte. */

router.get('/tramite.ejs', function(req, res, next) {
  res.render('tramite', { title: 'Tramite' });
});

/* GET  busqueda Traminte. */

router.get('/busquedaTramite.ejs', function(req, res, next) {
  res.render('busquedaTramite', { title: 'Tramite' });
});


module.exports = router;
