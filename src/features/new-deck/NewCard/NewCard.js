import { useState } from 'react';
import './NewCard.css';

export default function NewCard(props) {
    const { id, changeFrontCard, changeBackCard } = props;

    const [frontText, setFrontText] = useState('');
    const [backText, setBackText] = useState('');

    const handleFrontChange = ({ target }) => {
        setFrontText(target.value);
        changeFrontCard(id, target.value);
    };

    const handleBackChange = ({ target }) => {
        setBackText(target.value);
        changeBackCard(id, target.value);
    };

    return (
        <div className="form-card">
            <h2>New Card</h2>

            <div className="input-field">
                <label htmlFor="front">Front</label>
                <input 
                    type="text"
                    id="front"
                    value={frontText}
                    onChange={handleFrontChange}
                    minLength={2}
                    required
                    placeholder="Write the front text here"/>
            </div>

            <div className="input-field">
                <label htmlFor="back">Back</label>
                <input 
                    type="text"
                    id="back"
                    value={backText}
                    onChange={handleBackChange}
                    minLength={2}
                    required
                    placeholder="Write the back text here"/>
            </div>
        </div>
    );
}