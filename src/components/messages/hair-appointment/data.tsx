import { Gender } from '../hair/data';

export enum Location {
    Hoofddorp,
    Lelystad
}

export const defaultState = {
    firstname: '',
    lastname: '',
    gender: Gender.MALE,
    email: '',
    date: new Date(0),
    location: Location.Hoofddorp
};

export type AppointmentState = typeof defaultState;
