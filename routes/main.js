const nodemailer = require("nodemailer");

const main =  (email) => {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    // console.log(testAccount);

    // create reusable transporter object using the default SMTP transport
return new Promise((res,rej)=>{
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
    let info = transporter.sendMail({
        from: 'anilalappy@gmail.com', // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });


    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...  
    res()

})

}


// main()
module.exports = main