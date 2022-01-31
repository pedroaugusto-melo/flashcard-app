import { createSlice } from "@reduxjs/toolkit";

const decksSlice = createSlice({
    name: 'decks',
    initialState: [
        {
            id: 1,
            name: 'JavaScript',
            topic: 'Code',
            cards: [{front: 'question1', back: 'answer1'},
                    {front: 'question2', back: 'answer2'}]
        },

        {
            id: 2,
            name: 'Foods',
            topic: 'English',
            cards: [{front: 'question1', back: 'answer1'},
                    {front: 'question2', back: 'answer2'},
                    {front: 'question3', back: 'answer3'}]
        },

        {
            id: 3,
            name: 'Verbs',
            topic: 'English',
            cards: [{front: 'question1', back: 'answer1'}]
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