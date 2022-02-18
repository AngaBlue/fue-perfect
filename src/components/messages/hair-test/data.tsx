import { Gender } from '../hair/data';

export const defaultState = {
    firstname: '',
    lastname: '',
    gender: Gender.MALE,
    email: ''
};

export type HairState = typeof defaultState;
