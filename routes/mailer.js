var express = require('express');
var router = express.Router();
var main = require('./main')
var email ='dummy'

/* GET index page. */
router.post('/', function(req, res, next) {
    //   res.render('index', { title: 'Anil' });
    email =req.body.email
    console.log('home ------------post',email);
    // res.send(email)
    main(email).then(()=>{
        // res.redirect('/home/mailer')
        res.send('Mail send successfully')
    }).catch((err)=>{
        res.send('Something went wrong.!!')
    })
    // // res.render('mailer',{email})
   
    });

module.exports = router;
