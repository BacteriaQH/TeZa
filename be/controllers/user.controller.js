import { hash } from '../utils/hash';

export const Greeting = (req, res) => {
    return res.json('Hello World');
};

export const RegisterController = async (req, res) => {
    const { email, password, dob, name, isMale, address } = req.body;
    const hashPassword = await hash(password);

    const user = await createUser({ email, password: hashPassword, dob, name, isMale, address });
    if (user) {
        return res.status(200).json({ code: 200, message: 'Register successfully' });
    } else {
        return res.status(400).json({ code: 400, message: 'Register failed' });
    }
};
