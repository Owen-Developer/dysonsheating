const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
const nodemailer = require('nodemailer');
require('dotenv').config();

app.use(express.static('public'));


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS 
    }
  });
function sendVerificationEmail(data) {  
    let htmlContent;
    let textContent;
    if(data.phone){
        textContent =  "Name: " + data.firstname + " " + data.lastname + "\n\n Email: " + data.email + "\n\n Phone: " + data.phone + "\n\n Message: " + data.message,
        htmlContent = "<p>Name: " + data.firstname + " " + data.lastname + "<br><br> Email: " + data.email + "<br><br> Phone: " + data.phone + "<br><br> Message: " + data.message + "</p>"
    } else {
        textContent =  "Name: " + data.firstname + "\n\n Email: " + data.email + "\n\n Message: " + data.message,
        htmlContent = "<p>Name: " + data.name + "<br><br> Email: " + data.email + "<br><br> Message: " + data.message + "</p>"
    }

    const mailOptions = {
        from: 'marceauowen@gmail.com',  // Sender address
        to: process.env.ADMIN_EMAIL, // Receiver's email
        subject: 'Message from dysonsheating.co.uk', // Subject line
        text: textContent,
        html: "<p>" + htmlContent + "</p>"
    };
  
    // Send mail
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error sending email:', error);
    } else {
        console.log('Verification email sent:', info.response);
    }
});
}

app.post("/send", (req, res) => {
    sendVerificationEmail(req.body);

    res.redirect("/thank-you.html");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});