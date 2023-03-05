export default function (req, res) {
    require('dotenv').config()
  
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "admin@citymarttoken.com",
      auth: {
        user: 'admin@citymarttoken.com',
        pass: process.env.password,
      },
      secure: true,
    });
  
    const mailData = {
      from: 'admin@citymarttoken.com',
      to: 'admin@citymarttoken.com',
      subject: 'Presale Sample Contact Form',
      text: `Form Submitted \nFullname: ${req.body.name} \nEmail: ${req.body.email} \nTelegram: ${req.body.telegram} \n Message: ${req.body.message}`,
      html: ''
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