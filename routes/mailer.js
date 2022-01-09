var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

const main = async () => {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    // console.log(testAccount);

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'anilalappy@gmail.com', // generated ethereal user
            pass: 'ogmitewylzkgmrcj', // generated ethereal password
        },
    });
    let info = await transporter.sendMail({
        from: 'anilalappy@gmail.com', // sender address
        to: "freyaasgard.dev@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });


    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...  
}


// main()




/* GET mailer page. */
router.post('/', function (req, res, next) {
    //   res.render('index', { title: 'Anil' });
    res.send(req.body)
});

module.exports = router;
