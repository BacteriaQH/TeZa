import OTP from '../models/otp.model.js';

export const createOTP = async (email, otp) => {
    try {
        const otpR = await OTP.create({ email, otp });
        return otpR ? 1 : 0;
    } catch (error) {
        console.error(error);
        return false;
    }
};
