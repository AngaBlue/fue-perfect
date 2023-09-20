import dental from '../components/messages/dental';
import hair from '../components/messages/hair';
import hair_appointment from '../components/messages/hair-appointment';
import dental_appointment from '../components/messages/dental-appointment';

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
    },
    {
        name: 'Dent Afspraak',
        component: dental_appointment
    }
];

export default messages;
export interface Message {
    subject: string;
    content: string;
}
