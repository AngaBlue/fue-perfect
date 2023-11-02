import { NextApiHandler } from 'next';

// eslint-disable-next-line consistent-return
const logout: NextApiHandler = async (req, res): Promise<void> => {
    if (req.method === 'GET') {
        res.setHeader('set-cookie', ['fp-google=deleted', 'Path=/', 'Max-Age=0', 'SameSite=Strict', 'HttpOnly'].join(';'));
        res.redirect('/login?navigate=/');
        // eslint-disable-next-line consistent-return
        return;
    }
    return res.status(405).send('Method Not Allowed');
};

export default logout;
