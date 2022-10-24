import CrytoJS from 'crypto-js';

import { getIO } from '../index.js';
import { generateRandomString, obfuscate } from '../utils/random.js';
import { generateQRCode } from '../utils/qrcode.js';

const preURL = `${process.env.SERVER_URL}/api/verify/qr`;

const secretKey = process.env.SECRET_KEY;

export const GenerateQRCodeController = async (req, res) => {
    let io = getIO();
    const socket = io.sockets.adapter.rooms;
    //console.log('socket', socket);
    let socketId;
    for (let id of socket) {
        socketId = id;
    }
    let sID = socketId.toString().split(',')[0];
    const timestamp = Date.now().toString();
    const randomStr = generateRandomString(timestamp.length);
    /**
     * obfuscate: merge alternate 2 string
     */
    const preM = obfuscate(timestamp, randomStr).join('');

    const m = `${preM}.${sID}`;

    const c = CrytoJS.AES.encrypt(m, secretKey).toString();
    const url = `${preURL}?tk=${c}`;
    const qrcode = await generateQRCode(url);

    return res.status(200).json({ code: 200, qrcode: qrcode });
};
