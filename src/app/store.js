import { configureStore } from "@reduxjs/toolkit";
import topicSReducer from "../features/topics/topicsSlice";

const store = configureStore({
    reducer: {
        topics: topicSReducer
    }
});

export default store;