const nodemailer = require("nodemailer");

const client = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "Enter user Gmail",
        pass: "Google App Password Without Spaces"
    }
});

client.sendMail(
    {
        from: "Enter user Gmail",
        to: "Enter sender Gmail",
        subject: "Sending",
        text: "Hello"
    }
)