var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Anil' });
res.render('home')
});

// router.get('/mailer', function(req, res, next) {
//     //   res.render('index', { title: 'Anil' });
//     console.log('mailer----------- get',email);

//     res.render('mailer',{email})
//     });




module.exports = router;
