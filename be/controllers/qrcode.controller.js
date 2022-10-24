import CryptoJS from 'crypto-js';

import { getIO } from '../index.js';
import { createQRCode } from '../services/qrcode.service.js';

import { generateRandomString, obfuscate } from '../utils/random.js';
import { generateQRCode } from '../utils/qrcode.js';
import { getAgent } from '../utils/getAgent.js';
import { getSocketID } from '../utils/getSocketID.js';

const preURL = `${process.env.SERVER_URL}/api/verify/qr`;

const secretKey = process.env.SECRET_KEY;

export const GenerateQRCodeController = async (req, res) => {
    //get socket id
    let io = getIO();
    let sID = getSocketID(io);
    let agent = getAgent(req);
    // console.log('agentObject', agent);

    const timestamp = Date.now().toString();
    const randomStr = generateRandomString(timestamp.length);
    /**
     * obfuscate: merge alternate 2 string
     */
    const preM = obfuscate(timestamp, randomStr).join('');

    const m = `${preM}.${sID}`;

    const c = CryptoJS.AES.encrypt(m, secretKey).toString();
    const qrcodeS = await createQRCode(c, sID, {
        browser: { name: agent.browser.name, version: agent.browser.version },
        os: { name: agent.os.name, version: agent.os.version },
    });

    const url = `${preURL}?tk=${c}`;
    const qrcode = await generateQRCode(url);

    if (qrcodeS) return res.status(200).json({ code: 200, qrcode: qrcode });
};
