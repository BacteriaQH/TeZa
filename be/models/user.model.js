import mongoose from 'mongoose';

const usermSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        isMale: Boolean,
        dob: Date,
        address: String,
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
);

const User = mongoose.model('User', userSchema);

export default User;
