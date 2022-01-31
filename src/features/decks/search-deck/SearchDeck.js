import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDecks } from '../decksSlice';
import './SearchDeck.css';

export default function SearchDeck(props) {
    const { changeVisibleDecks } = props;
    const [findDeck, setFindDeck] = useState('');
    const decks = useSelector(selectDecks);

    function getVisibleDecks(searchTerm) {
        return decks.filter(deck => (
            deck.name.includes(searchTerm)
        ));
    }

    const handleInputChange = ({ target }) => {
        setFindDeck(target.value);
        changeVisibleDecks(getVisibleDecks(target.value));
    };

    return (
        <div className="SearchDeck">
            <input 
                type="text" 
                placeholder='Search a deck here'
                value={findDeck}  
                onChange={handleInputChange}/>
        </div>
    );
}