export default function (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 1025,
        host: "localhost",
        ignoreTLS: true,
        auth: {
            user: 'user123',
            password: 'password123',
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