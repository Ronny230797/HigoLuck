import { ADDNUMBER, REMOVENUMBER } from './ActionTypes';

const initialState = {
    listOfNumbers: [
        {
            number: 23,
            amount: 1000,
            dayNight: 'Day'
        },
        {
            number: 82,
            amount: 100,
            dayNight: 'Day'
        },
        {
            number: 33,
            amount: 500,
            dayNight: 'Day'
        },
        {
            number: 73,
            amount: 7000,
            dayNight: 'Day'
        },
    ],
};

export const mainReducer = (state = initialState, action) => {
    let number = {
        number: 97,
        amount: 550,
        dayNight: 'Day'
    };

    switch (action.type) {
        case ADDNUMBER:
            return { ...state, listOfNumbers: [...state.listOfNumbers, number] }; // replace number by ...action.payload

        case REMOVENUMBER:
            return {... state,listOfNumbers: [...state.listOfNumbers, state.listOfNumbers.filter(x => x.number != 73)]}
        default:
            return state;
    }
}