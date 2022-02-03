import { verify } from 'jsonwebtoken';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';

export const month = 30 * 24 * 60 * 60;

export default function authorize(cookies: NextApiRequestCookies): boolean {
    const cookie = cookies['fp-google'];

    // Check existance, verify validity, and check age
    if (cookie && verify(cookie, process.env.COOKIE_SECRET, { maxAge: 6 * month })) return true;
    return false;
}
