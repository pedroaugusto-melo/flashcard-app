import { useState } from 'react';
import './GameCard.css';

export default function GameCard(props) {
    const { card, cardNumber, totalCards, nextCard } = props;
    const [ isFlipped, setIsFlipped ] = useState(false);
    const [ remembered, setRemembered ] = useState(null);
    let messageError = '';

    const handleShowAnswer = () => {
        setIsFlipped(true);
    };

    const handleRemember = event => {
        setRemembered(true);
        event.target.style.backgroundColor = 'green';
        document.getElementById('forgotted').setAttribute('disabled', 'true');
        document.getElementById('forgotted').style.opacity = '0.5';
    };

    const handleForgoted = event => {
        setRemembered(false);
        event.target.style.backgroundColor = 'red';
        document.getElementById('remembered').setAttribute('disabled', 'true');
        document.getElementById('remembered').style.opacity = '0.5';
    };

    const handleNextCard = () => {
        if(remembered !== null) {
            nextCard(remembered);
            if(messageError) document.removeChild(messageError);
            messageError = '';
        } else {
            messageError = document.createElement('p');
            messageError.innerHTML = 'Please, mark the card as Remembered of Forgotted';
            messageError.style.fontSize = '12px';
            messageError.style.color = 'red';
            messageError.style.margin = '0 auto';
            document.querySelector('.GameCard').appendChild(messageError);
        }
    };
    
    return (
        <div className='GameCard'>
            <h3>Card {cardNumber + 1} of {totalCards}</h3>


            <div className="card-body">
                {!isFlipped ? <h4>#front</h4> : <h4>#back</h4>}
                {!isFlipped ? <p>{card.front}</p> : <p>{card.back}</p>}
            </div>

            {!isFlipped && 
                <button 
                    className='show-answer'
                    onClick={handleShowAnswer}
                >
                    Show answer
                </button>
            }

            {isFlipped && 
                <>
                    <div className='card-btns'>
                        <button 
                            onClick={handleRemember}
                            id='remembered'
                        >
                            Remembered
                        </button>

                        <button
                            onClick={handleForgoted}
                            id='forgotted'
                        >
                            Forgotted
                        </button>
                    </div>
                    
                    <button 
                        className='next-card'
                        onClick={handleNextCard}
                    >
                        Next Card
                    </button>
                </>
            }
        </div>
    );
}