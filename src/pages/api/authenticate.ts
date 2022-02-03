import { NextApiHandler } from 'next';
import { sign } from 'jsonwebtoken';
import { password } from '../../data/schemas';
import { month } from '../../util/authorize';

const isDev = process.env.NODE_ENV !== 'production';

// eslint-disable-next-line consistent-return
const authenticate: NextApiHandler = (req, res): void => {
    if (req.method === 'POST') {
        // Validate
        const validation = password.validate(req.body.password);
        if (validation.error) return res.status(400).json(validation.error);

        // Check password
        if (validation.value !== process.env.PASSWORD) return res.status(401).json('Incorrect password');
        const jwt = sign({}, process.env.COOKIE_SECRET);

        // Set cookie & send response
        const cookie = [`fp-jwt=${jwt}`, 'Path=/', `Max-Age=${6 * month}`, 'SameSite=Strict', 'HttpOnly'];

        if (!isDev) cookie.push('Secure', `Domain=${req.headers.host}`);

        res.setHeader('set-cookie', cookie.join(';'));
        return res.status(200).send('OK');
    }
    return res.status(405).send('Method Not Allowed');
};

export default authenticate;
