import { Gender } from '../hair/data';

export enum Location {
	Lelystad = 0
}

export const defaultState = {
	firstname: '',
	lastname: '',
	gender: Gender.MALE,
	email: '',
	date: new Date(),
	location: Location.Lelystad
};

export type AppointmentState = typeof defaultState;
