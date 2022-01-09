var express = require('express');
var router = express.Router();
var main = require('./main')
var email ='dummy'

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Anil' });
res.render('home')
});

router.get('/mailer', function(req, res, next) {
    //   res.render('index', { title: 'Anil' });
    console.log('mailer----------- get',email);

    res.render('mailer',{email})
    });

router.post('/', function(req, res, next) {
    //   res.render('index', { title: 'Anil' });
    email =req.body.email
    console.log('home ------------post',email);
    main(email).then((res)=>{
        // res.redirect('/home/mailer')
        res.send('Mail send successfully')
    }).catch((err)=>{
        res.send('Something went wrong.!!')
    })
    // res.render('mailer',{email})
   
    });


module.exports = router;
