import './Topic.css';

export default function Topic(props) {
    const { topic, delTopic } = props;

    const handleDeleteTopic = () => {
        delTopic(topic);
    };

    return (
        <div className='TopicBody'>
            <div className='TopicContent'>
                <h3>{topic.emoji}</h3>
                <h3>{topic.name}</h3>
            </div>

            <button onClick={handleDeleteTopic}> ❌ </button>
        </div>
    );
}