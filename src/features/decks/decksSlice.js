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