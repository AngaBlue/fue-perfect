import { Gender } from '../hair/data';

export const defaultState = {
	firstname: '',
	lastname: '',
	gender: Gender.MALE,
	email: '',
	phonenumber: ''
};

export type AppointmentState = typeof defaultState;
