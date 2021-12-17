export default function (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: process.env.SMTP_PORT,
        host: process.env.SMTP_HOST,
        ignoreTLS: true,
        auth: {
            user: process.env.SMTP_USER,
            password: process.env.SMTP_PASSWORD,
        },
    });

    const mailData = {
        from: req.body.mail,
        to: "chahine.benlahcen@gmail.com",
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.mail,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.mail}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    })

    console.log(req.body)
    res.send('success')
}