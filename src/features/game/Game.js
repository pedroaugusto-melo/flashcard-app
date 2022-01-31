import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectDecks } from '../decks/decksSlice';
import GameCard from './game-card/GameCard';
import './Game.css';

export default function Game() {
    const [ searchParams ] = useSearchParams();
    const [ currCard, setCurrCard ] = useState(0);
    const decks = useSelector(selectDecks);
    const deckId = Number(searchParams.get('id'));
    
    const [ gameDeck ] = decks.filter(deck => deck.id === deckId);
    
    const cardComponents = gameDeck.cards.map((card, idx) => (
        <GameCard 
            card={card} 
            cardNumber={idx} 
            totalCards={gameDeck.cards.length}
        />
    ));

    console.log('Deck: ', gameDeck);
    console.log('Cards: ', gameDeck.cards);

    return (
        <div className="Game">
            {cardComponents[currCard]}
        </div>
    );
}