import dental from '../components/messages/dental';
import hair from '../components/messages/hair';
import hair_appointment from '../components/messages/hair-appointment';

const messages = [
    {
        name: 'Fue Offerte',
        component: hair
    },
    {
        name: 'Tandheelkundig',
        component: dental
    },
    {
        name: 'Fue Afspraak',
        component: hair_appointment
    }
];

export default messages;
export interface Message {
    subject: string;
    content: string;
}
