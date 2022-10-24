import mongoose from 'mongoose';

const otpSchema = mongoose.Schema({
    email: String,
    otp: String,
    time: {
        type: Date,
        default: Date.now(),
        index: {
            expires: '3m',
        },
    },
});

const OTP = mongoose.model('OTP', otpSchema);

export default OTP;