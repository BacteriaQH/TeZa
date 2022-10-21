import * as nodemailer from 'nodemailer';
import { generateOTP } from '../utils/otp.js';
import { hash } from '../utils/hash.js';

import { createOTP } from '../services/otp.service.js';

const user = process.env.MAIL_USER;
const pass = process.env.MAIL_PASS;

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: user,
        pass: pass,
    },
});

export const CreateOTPController = async (req, res) => {
    const { email } = req.body;
    const otp = generateOTP();
    const hOTP = await hash(otp);

    const mailOptions = {
        from: user,
        to: email,
        subject: 'Sending OTP',
        text: otp,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return res.status(404).json({ code: 404, message: 'OTP not created' });
        } else {
            console.log('Email sent: ' + JSON.stringify(info));
        }
    });
    console.log('SENT');
    let result = await createOTP(email, hOTP);

    if (result) {
        return res.status(200).json({ code: 200, message: 'OTP created successfully' });
    } else {
        return res.status(404).json({ code: 404, message: 'OTP not created' });
    }
};
