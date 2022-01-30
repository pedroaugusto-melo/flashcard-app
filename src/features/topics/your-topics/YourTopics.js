import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch } from '../search-topic/searchTopicSlice';
import {  deleteTopic } from '../topicsSlice';
import { selectAllTopics } from '../topicsSlice';
import Topic from './topic/Topic';
import './YourTopics.css';

export default function YourTopics() {
    const dispatch = useDispatch();
    const allTopics = useSelector(selectAllTopics);
    const searchTopic = useSelector(selectSearch);
    const filteredTopics = allTopics.filter(topic => topic.name.includes(searchTopic));
    const [numTopicsVisible, setNumTopicsVisible] = useState(3);
    
    useEffect(() => {
       if(numTopicsVisible > 3) {
           setNumTopicsVisible(filteredTopics.length);
       }
    }, [filteredTopics, numTopicsVisible]);

    const delTopic = topicToDelete => {
        dispatch(deleteTopic(topicToDelete));
    };

    const showMoreTopics = () => {
       setNumTopicsVisible(filteredTopics.length);
    };

    const showLessTopics = () => {
        setNumTopicsVisible(3); 
    }

    return (
        <div className='YourTopics'>
            <h2>Your Topics</h2>

            <ul className='Topics'>
                {filteredTopics.map((topic, idx) => {
                    if(idx > numTopicsVisible - 1) return null;

                    return (
                        <li key={topic.id}>
                            <Topic 
                                topic={topic} 
                                delTopic={delTopic} />
                        </li>
                    );        
                })}
            </ul>
            
            {(filteredTopics.length > 3 && numTopicsVisible <= 3) && <h4 onClick={showMoreTopics}>Show more</h4>}
            {(filteredTopics.length > 3 && numTopicsVisible > 3) && <h4 onClick={showLessTopics}>Show less</h4>}
            

        </div>
    );
}