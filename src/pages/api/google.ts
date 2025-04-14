import { google } from 'googleapis';
import type { NextApiHandler } from 'next';

const isDev = process.env.NODE_ENV !== 'production';

const authenticate: NextApiHandler = (req, res): void => {
	if (req.method === 'GET') {
		const { host } = req.headers;
		const oauth2Client = new google.auth.OAuth2(
			process.env.GOOGLE_CLIENT_ID,
			process.env.GOOGLE_CLIENT_SECRET,
			`http${isDev ? '' : 's'}://${host}/api/google/callback`
		);

		const url = oauth2Client.generateAuthUrl({
			access_type: 'offline',
			scope: ['email', 'https://mail.google.com/'],
			prompt: 'select_account consent'
		});

		res.redirect(url);
	} else {
		res.status(405).send('Method Not Allowed');
	}
};

export default authenticate;
