import { useDispatch, useSelector } from 'react-redux';
import { addTopic, selectTopics } from '../topicsSlice';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
import './NewTopic.css';

export default function NewTopic() {
    const dispatch = useDispatch();
    const topics = useSelector(selectTopics);
    const [pickerVisible, setPickerVisible] = useState(false);
    
    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addTopic({
            id: topics.length + 1,
            name: event.target.name.value,
            emoji: document.getElementById('current-emoji').innerHTML
        }));
    };

    const handleEmojiClick = (event, emoji) => {
        event.preventDefault();
        document.getElementById('current-emoji').innerHTML = emoji.emoji;
    }

    const togglePickerVisibility = event => {
        event.preventDefault();
        setPickerVisible(prevVisibility => !prevVisibility);
    };

    return (
        <form className='NewTopic' onSubmit={handleSubmit}>
            <h2>New Topic</h2>

            <div className='input-field'>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" minLength={2} required/>
            </div>

            <div className='input-field'>
                <h3>Emoji</h3>
                <button onClick={togglePickerVisibility}>
                    <span id='current-emoji'>👀</span>
                </button>
            </div>

            {pickerVisible && <EmojiPicker 
                                pickerStyle={{boxShadow: 'none'}} 
                                onEmojiClick={handleEmojiClick}/>
            }
        
            <input type="submit" value="Create Topic" />
        </form>
    );
}