import { useDispatch, useSelector } from 'react-redux';
import { deleteDeck, selectDecks } from './decksSlice';
import Deck from './deck/Deck';
import SearchDeck from './search-deck/SearchDeck';
import { useState } from 'react';
import './Decks.css';

let currKey = 0;

export default function Decks() {
    const [visibleDecks, setVisibleDecks] = useState(useSelector(selectDecks));
    const dispatch = useDispatch();

    const changeVisibleDecks = (newVisibleDecks) => {
        setVisibleDecks(newVisibleDecks);
    };

    const delDeck = id => {
        dispatch(deleteDeck(id));
        
        setVisibleDecks(prevVisibleDecks => (
            prevVisibleDecks.filter(prevVisibleDeck => prevVisibleDeck.id !== id)
        ));
    }

    return (
        <>
            
            <SearchDeck changeVisibleDecks={changeVisibleDecks}/>

            <div className="Decks">
                {visibleDecks.map(deck => (
                    <Deck 
                        key={currKey++} 
                        deck={deck}
                        delDeck={delDeck} />
                ))}
            </div>
        </>
    );
}