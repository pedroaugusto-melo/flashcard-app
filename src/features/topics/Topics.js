import { useSelector } from "react-redux";
import NewTopic from "./new-topic/NewTopic";
import { selectTopics } from "./topicsSlice";
import './Topics.css';

export default function Topics() {
    const topics = useSelector(selectTopics);

    return (
        <div>
            {console.log(topics)}
            <NewTopic />
        </div>
    );
}