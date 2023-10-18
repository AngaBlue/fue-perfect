import { NextApiHandler } from 'next';
import { kv } from '@vercel/kv';
import { randomUUID } from 'crypto';
import { reminderMessage } from '../../data/schemas';
import authorize from '../../util/authorize';

const scheduleMail: NextApiHandler = async (req, res): Promise<void> => {
    if (req.method === 'POST') {
        // Authenticate
        const auth = authorize(req.cookies);
        if (!auth) return res.status(401).send('Unauthenticated');

        // Validate
        const validation = reminderMessage.validate(req.body);
        if (validation.error) return res.status(400).json({ name: validation.error.name, message: validation.error.message });

        // Send
        try {
            await kv.hset(`reminder:${randomUUID()}`, {
                ...validation.value,
                date: (validation.value.date as Date).getTime(),
                email: auth.email,
                token: auth.rt
            });
        } catch (err) {
            // If there is an error, return it
            if (err) return res.status(500).send({ name: 'Fout', message: err });
        }

        // Otherwise, return OK
        return res.status(200).send('OK');
    }

    // If the method is not POST, return Method Not Allowed
    return res.status(405).send('Method Not Allowed');
};

export default scheduleMail;
