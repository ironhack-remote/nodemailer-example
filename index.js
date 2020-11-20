const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

// place your email in HTML format here
const message = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
      body {
        font-family: sans-serif;
      }

      footer {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1>Testing NodeMailer</h1>
    <hr />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate odio in consequatur eum
      temporibus quas?
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae labore voluptatem, atque vitae
      corporis quia consequatur quisquam ratione hic dolorem officiis natus aliquam odit accusamus
      quam soluta error repudiandae amet!
    </p>

    <footer>Nodemailer Testing | 2020</footer>
  </body>
</html>
`;

/*
const transporter = nodemailer.createTransport({
  service: "Gmail", // using the service property, host & port properties are set automatically 
  auth: {
    user: testAccount.user, // sender email account
    pass: testAccount.pass, // sender email password
  } // You need to enable the option "use unsecure apps" in the settings of your google account! -> https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjlwduY6JHtAhUHn6QKHes1A6wQFjACegQIARAC&url=https%3A%2F%2Fmyaccount.google.com%2Flesssecureapps&usg=AOvVaw3FH1O5TwzTEB9B9yhEUsI7
    
*/

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io', // using mailtrap to test nodemailer functionality -> https://mailtrap.io/
  port: 2525,
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD
  }
});

transport.sendMail({
  from: `"Fred Foo 👻" ${process.env.USER_EMAIL}`, // sender address
  to: 'f0b75a5adf-02d375@inbox.mailtrap.io', // receiver email address
  subject: 'Hello ✔', // Subject line
  //text: 'Hello world?', // plain text body
  html: message // html body
});
