import NewTopic from "./new-topic/NewTopic";
import YourTopics from "./your-topics/YourTopics";
import SearchTopic from "./search-topic/SearchTopic";
import './Topics.css';

export default function Topics() {
    return (
        <div className="Topics">
            <SearchTopic />
            <YourTopics />
            <NewTopic />
        </div>
    );
}