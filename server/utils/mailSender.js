process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // Add this line

const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try {
        console.log('MAIL_HOST:', process.env.MAIL_HOST);
        console.log('MAIL_USER:', process.env.MAIL_USER);

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587, // Adjust as needed for your mail service
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        });
 
        let info = await transporter.sendMail({
            from: 'TechGrasp || Best E-Learning Platform - by Rohit Raj',
            to: email,
            subject: title,
            html: body,
        });

        console.log('Email sent:', info.messageId);
        return info;
    } catch (error) {
        console.error('Error sending email:', error.message);
        if (error.response) {
            console.error('SMTP response:', error.response);
        }
    }
};

module.exports = mailSender;
