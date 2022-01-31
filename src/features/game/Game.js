import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { selectDecks } from '../decks/decksSlice';
import GameCard from './game-card/GameCard';

import imgResults from '../../img/results.png';
import './Game.css';

export default function Game() {
    const [ searchParams ] = useSearchParams();
    const [ currCard, setCurrCard ] = useState(0);
    const [ numberRemembered, setNumberRemembered ] = useState(0);
    const decks = useSelector(selectDecks);
    const deckId = Number(searchParams.get('id'));
    
    const [ gameDeck ] = decks.filter(deck => deck.id === deckId);
    
    const cardComponents = gameDeck.cards.map((card, idx) => (
        <GameCard
            key={idx} 
            card={card} 
            cardNumber={idx} 
            totalCards={gameDeck.cards.length}
            nextCard={nextCard}
        />
    ));

    function nextCard(remembered) {
        if(remembered) {
            setNumberRemembered(prevNumberRemembered => ++prevNumberRemembered);
        }

        if(currCard < gameDeck.cards.length) {
            setCurrCard(prevCurrCard => ++prevCurrCard);
        }
    }

    return (
        <div className="Game">
            {currCard !== gameDeck.cards.length ? 
                cardComponents[currCard]
                :
                <div className='game-results'>
                    <h2>Results</h2>
                    <img alt='Results' src={imgResults} />

                    <div className='results-content'>
                        <h4>You remembered:</h4>
                        <h3>{numberRemembered} of {gameDeck.cards.length} cards</h3>
                        <h3>{(numberRemembered/gameDeck.cards.length*100).toFixed(1)}% of the deck</h3>
                    </div>

                    <button>
                        <Link 
                            style={{textDecoration: 'none', color: '#FFFFFF'}} 
                            to="/decks"
                        >
                            Exit
                        </Link>  
                    </button>
                </div>
            }
        </div>
    );
}