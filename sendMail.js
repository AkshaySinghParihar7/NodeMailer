const nodemailer = require('nodemailer');

const sendMailFunction = async (req, res) => {

    // Create a transporter using your email provider's SMTP settings
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAILID,
            pass: process.env.EMAILPASSWORD
        }
    });

    // Email content
    const { subject, receiver, cc, message } = req.body;
    const mailOptions = {
        from: process.env.EMAILNAME,
        to: receiver,
        cc: cc,
        subject: subject,
        html: message
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.json({ status: false, message: error.message });
        } else {
            console.log('Email sent:', info.response);
            res.json({ status: true, message: `Email sent:${info.response}` });
        }
    });
}

module.exports = {
    sendMailFunction
};