const nodemailer = require("nodemailer");

module.exports.mail=function mail(name,email){
var transporter=nodemailer.createTransport({
    
    host:'smtp.gmail.com',
    port:'587',
    secure:false,
    auth: {
        user:'sa151097akhter@gmail.com',
        pass:'jyrmbfpeqklyrdzh'
    }
});

var Ohtml=`<h1 style="text-align:center;">Node Mailer API</h1> 
           <p>Congratulation your registration is successful. </p>
           <p>Here are your details - </p>
            Name: ${name} <br>
            Email: ${email}<br> `;

var mailOptions = {
    from: ' "Node Mailer API" <sa151097akhter@gmail.com>',
    to: email,
    subject: 'Registration Successful',
    html: Ohtml
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
};