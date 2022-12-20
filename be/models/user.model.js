import { Schema, model } from 'mongoose';
export const agentSchema = new Schema(
    {
        ip: String,
        device: {
            name: String,
            version: String,
        },
        location: {
            country: String,
            city: String
        },
        isMobile: Boolean
    }

)
const userSchema = new Schema(
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
        image: String,
        isMale: Boolean,
        dob: Date,
        address: String,
        isAdmin: {
            type: Boolean,
            default: false,
        },
        agent: [agentSchema],
    },
    { timestamps: true },
);

const User = model('User', userSchema);

export default User;
