import { configureStore } from "@reduxjs/toolkit";
import topicSReducer from "../features/topics/topicsSlice";
import searchTopicReducer from "../features/topics/search-topic/searchTopicSlice";
import decksReducer from "../features/decks/decksSlice";

const store = configureStore({
    reducer: {
        topics: topicSReducer,
        searchTopic: searchTopicReducer,
        decks: decksReducer
    }
});

export default store;