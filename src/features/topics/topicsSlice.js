import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: [
        {
            id: 1,
            name: 'Code',
            emoji: '💻'
        }, 

        {
            id: 2,
            name: 'English',
            emoji: '🌏'
        }
    ],
    reducers: {
        addTopic: (state, action) => {
            state.push(action.payload);
        },

        deleteTopic: (state, action) => {
            const topicsIds = state.map(topic => topic.id);
            const idxToDelete = topicsIds.indexOf(action.payload.id);

            state.splice(idxToDelete, 1);
        }
        
    }
});

const selectAllTopics = state => state.topics;


export { selectAllTopics };
export const { addTopic, deleteTopic } = topicsSlice.actions; 
export default topicsSlice.reducer;