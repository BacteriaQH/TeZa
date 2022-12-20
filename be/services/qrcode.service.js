import QRCode from '../models/qrcode.model.js';

export const createQRCode = async (cipher, socketId, userAgent) => {
    try {
        const qrcode = await QRCode.create({
            cipher, socketId, agent: {
                ip: userAgent.ip,
                device: {
                    name: userAgent.device.name,
                    version: userAgent.device.version,
                },
                location: {
                    country: userAgent.location.country,
                    city: userAgent.location.city
                },
                isMobile: userAgent.isMobile
            }
        });
        return qrcode ? 1 : 0;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export const getQRCode = async (socketId) => {
    try {
        const qrcode = await QRCode.findOne({ socketId });
        return qrcode;
    } catch (error) {
        console.error(error);
        return false;
    }
};
