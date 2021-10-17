import hair from '../components/messages/hair/hair';

const messages: typeof hair[] = [hair];

export default messages;
export interface Message {
    subject: string;
    content: string;
    images: string[];
}
