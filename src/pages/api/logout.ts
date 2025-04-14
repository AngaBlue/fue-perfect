import type { NextApiHandler } from 'next';

const isDev = process.env.NODE_ENV !== 'production';

const logout: NextApiHandler = (req, res) => {
	if (req.method === 'GET') {
		const cookie = ['fp-google=deleted', 'Path=/', 'Max-Age=0', 'SameSite=Strict', 'HttpOnly'];

		if (!isDev) cookie.push('Secure', `Domain=${req.headers.host}`);

		res.setHeader('set-cookie', cookie.join(';'));
		res.redirect('/login?navigate=/');
		return;
	}
	return res.status(405).send('Method Not Allowed');
};

export default logout;
