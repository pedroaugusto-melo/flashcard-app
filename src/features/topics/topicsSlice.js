import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: [],
    reducers: {
        addTopic: (state, action) => {
            state.push(action.payload);
        }
    }
});

const selectTopics = state => state.topics;

export { selectTopics };
export const { addTopic } = topicsSlice.actions; 
export default topicsSlice.reducer;