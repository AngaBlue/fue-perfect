import { verify } from 'jsonwebtoken';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';

const month = 30 * 24 * 60 * 60;

export default function authorize(cookies: NextApiRequestCookies): boolean {
    const cookie = cookies['fp-jwt'];

    // Check existance, verify validity, and check age
    return !!cookie && !verify(cookie, process.env.COOKIE_SECRET, { maxAge: 6 * month });
}
