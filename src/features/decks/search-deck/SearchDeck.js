import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDecks } from '../decksSlice';
import './SearchDeck.css';

export default function SearchDeck(props) {
    const { changeVisibleDecks } = props;
    const [findDeck, setFindDeck] = useState('');
    const decks = useSelector(selectDecks);

    const handleInputChange = ({ target }) => {
        setFindDeck(target.value);

        const visibleDecks = decks.filter(deck => ( 
            deck.name.includes(target.value)
        ));
        
        changeVisibleDecks(visibleDecks);
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