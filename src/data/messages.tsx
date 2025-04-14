import dental from '../components/messages/dental';
import dental_appointment from '../components/messages/dental-appointment';
import dental_missed_call from '../components/messages/dental-missed-call';
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
	},
	{
		name: 'Dent Afspraak',
		component: dental_appointment
	},
	{
		name: 'Tandheelkundige gemiste oproep',
		component: dental_missed_call
	}
];

export default messages;
export interface Message {
	subject: string;
	content: string;
}
