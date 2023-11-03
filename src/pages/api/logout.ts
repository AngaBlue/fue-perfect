import { NextApiHandler } from 'next';

const isDev = process.env.NODE_ENV !== 'production';

// eslint-disable-next-line consistent-return
const logout: NextApiHandler = async (req, res): Promise<void> => {
    if (req.method === 'GET') {
        const cookie = ['fp-google=deleted', 'Path=/', 'Max-Age=0', 'SameSite=Strict', 'HttpOnly'];

        if (!isDev) cookie.push('Secure', `Domain=${req.headers.host}`);

        res.setHeader('set-cookie', cookie.join(';'));
        res.redirect('/login?navigate=/');
        // eslint-disable-next-line consistent-return
        return;
    }
    return res.status(405).send('Method Not Allowed');
};

export default logout;
