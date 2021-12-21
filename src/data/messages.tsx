import dental from '../components/messages/dental';
import hair from '../components/messages/hair';

const messages = [
    {
        name: 'Haar',
        component: hair
    },
    {
        name: 'Dent',
        component: dental
    }
];

export default messages;
export interface Message {
    subject: string;
    content: string;
    images: string[];
}
