import { createSlice } from "@reduxjs/toolkit";

const searchTopicSlice = createSlice({
    name: 'searchTopic',
    initialState: '',
    reducers: {
        setSearch: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});

const selectSearch = state => state.searchTopic;

export { selectSearch };
export const { setSearch } = searchTopicSlice.actions;
export default searchTopicSlice.reducer;