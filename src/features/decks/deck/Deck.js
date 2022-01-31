import { useSelector } from "react-redux";
import { selectAllTopics } from "../../topics/topicsSlice";
import { Link } from "react-router-dom";
import './Deck.css';

export default function Deck(props) {
    const { deck } = props;
    const topics = useSelector(selectAllTopics);

    const getTopicEmoji = (topicName) => {
        let emoji = '';

        topics.forEach(topic => {
            if(topic.name === topicName) {
                emoji = topic.emoji;
            }
        });

        return emoji;
    }

    return (
        <div className="Deck">
            <div className="deck-header">
                <h2>{getTopicEmoji(deck.topic)}</h2>
                <h3>{deck.name}</h3>
            </div>
            
            <div className="deck-content">
                <h4><span>Topic:</span> {deck.topic}</h4>
                <h4><span>Cards:</span> {deck.cards.length}</h4>
            </div>

            <button>
                <Link 
                    style={{textDecoration: 'none', color: '#FFFFFF'}} 
                    to={`/game?id=${deck.id}`}>
                    Start
                </Link>
            </button>
        </div>
    );
}