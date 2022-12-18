import { Schema, model } from 'mongoose';
import { agentSchema } from './user.model';


const qrcodeSchema = new Schema(
    {
        cipher: String,
        socketId: String,
        userAgent: agentSchema,
        // ip: String,
        time: {
            type: Date,
            default: Date.now,
            index: {
                expires: 18000,
            },
        },
    },
    {
        timestamps: true,
    },
);

const QRCode = model('QRCode', qrcodeSchema);

export default QRCode;
