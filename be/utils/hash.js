import bcrypt from 'bcrypt';

const salt = bcrypt.genSaltSync(10);

export const hash = async (password) => {
    return await bcrypt.hash(password, salt);
};

export const compare = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};
