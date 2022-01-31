import { createSlice } from "@reduxjs/toolkit";

const decksSlice = createSlice({
    name: 'decks',
    initialState: [
        {
            id: 1,
            name: 'JavaScript',
            topic: 'Code',
            cards: [{front: 'What is React?', back: 'A JavaScript library that facilites the creation of Web Apps'},
                    {front: 'JavaScript is typed?', back: 'No'}]
        },

        {
            id: 2,
            name: 'Foods',
            topic: 'English',
            cards: [{front: 'Soup', back: 'Sopa'},
                    {front: 'Steak', back: 'Filé'},
                    {front: 'Carrot', back: 'Cenoura'}]
        },

        {
            id: 3,
            name: 'Verbs',
            topic: 'English',
            cards: [{front: 'Borrow', back: 'Emprestar'}]
        }
    ],
    reducers: {
        addDeck: (state, action) => {
            state.push(action.payload);
        }
    }
});

const selectDecks = state => state.decks;

export { selectDecks };
export const { addDeck } = decksSlice.actions;
export default decksSlice.reducer;