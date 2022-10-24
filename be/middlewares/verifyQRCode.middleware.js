import CryptoJS from 'crypto-js';
import { deobfuscate } from '../utils/random.js';
import { getIO } from '../index.js';
import { getQRCode } from '../services/qrcode.service.js';

const secretKey = process.env.SECRET_KEY;

export const VerifyQRCodeController = async (req, res, next) => {
    const io = getIO();

    const { tk } = req.body;
    const m = CryptoJS.AES.decrypt(tk, secretKey);
    const d = m.toString(CryptoJS.enc.Utf8);
    const [preM, sID] = d.split('.');

    const qrcode = await getQRCode(sID);
    //console.log(qrcode);
    /**
     * socket to client if the QR code is expired
     */
    const timestamp = Number(deobfuscate(preM));

    const now = new Date().getTime();
    //console.log(now - timestamp);
    if (now - timestamp > 300000) {
        io.to(sID).emit('expired');
    } else {
        res.status(200).json(qrcode.userAgent);
    }
};
