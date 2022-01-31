import { useSelector } from 'react-redux';
import { selectDecks } from './decksSlice';
import Deck from './deck/Deck';
import SearchDeck from './search-deck/SearchDeck';
import { useState } from 'react';
import './Decks.css';

export default function Decks() {
    const [visibleDecks, setVisibleDecks] = useState(useSelector(selectDecks));

    const changeVisibleDecks = (newVisibleDecks) => {
        setVisibleDecks(newVisibleDecks);
    };

    return (
        <>
            <SearchDeck changeVisibleDecks={changeVisibleDecks}/>

            <div className="Decks">
                {visibleDecks.map(deck => (
                    <Deck key={deck.id} deck={deck} />
                ))}
            </div>
        </>
    );
}