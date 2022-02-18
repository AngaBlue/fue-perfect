import dental from '../components/messages/dental';
import hair from '../components/messages/hair';
import hairTest from '../components/messages/hair-test';

const messages = [
    {
        name: 'Haar',
        component: hair
    },
    {
        name: 'Haar Resultaten',
        component: hairTest
    },
    {
        name: 'Tandheelkundig',
        component: dental
    }
];

export default messages;
export interface Message {
    subject: string;
    content: string;
}
