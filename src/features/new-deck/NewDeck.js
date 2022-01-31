import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDeck, selectDecks } from "../decks/decksSlice";
import { selectAllTopics } from "../topics/topicsSlice";
import NewCard from "./NewCard/NewCard";
import './NewDeck.css';

let currKey = 0;

export default function NewDeck() {
    const dispatch = useDispatch();
    const allTopics = useSelector(selectAllTopics);
    const decks = useSelector(selectDecks);

    const [ cards, setCards ] = useState([
                                            <NewCard 
                                                key={currKey} 
                                                id={0}
                                                changeFrontCard={changeFrontCard} 
                                                changeBackCard={changeBackCard} 
                                            /> 
                                        ]);

    const [ cardsData, setCardsData ] = useState([
                                                    {
                                                        id: 0, 
                                                        front: '', 
                                                        back: ''
                                                    }
                                                ]);

    const clearForm = target => {
        target.name.value = '';
        target.topic.value = '';
        setCards(prevCards => ([
                    <NewCard key={++currKey} 
                        id={0}
                        changeFrontCard={changeFrontCard} 
                        changeBackCard={changeBackCard} 
                    />
        ]));

        setCardsData([
                        {
                            id: 0, 
                            front: '', 
                            back: ''
                        }
        ]);
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addDeck({
            id: decks.length + 1,
            name: event.target.name.value,
            topic: event.target.topic.value,
            cards: cardsData.filter(cardData => {
                                        return ({
                                            front: cardData.front,
                                            back: cardData.back
                                        });
                                    })
        }));
        clearForm(event.target);
    };

    function changeFrontCard(id, frontText) {
        setCardsData(prevCardsData => {
            const cardToModify = prevCardsData.find(prevCardData => prevCardData.id === id);
            const newCardsData = prevCardsData.filter(prevCardData => prevCardData.id !== id);
            
            newCardsData.push({
                id: cardToModify.id,
                front: frontText,
                back: cardToModify.back
            });

            return newCardsData;
            
        });
    }

    function changeBackCard(id, backText) {
        setCardsData(prevCardsData => {
            const cardToModify = prevCardsData.find(prevCardData => prevCardData.id === id);
            const newCardsData = prevCardsData.filter(prevCardData => prevCardData.id !== id);
            
            newCardsData.push({
                id: cardToModify.id,
                front: cardToModify.front,
                back: backText
            });

            return newCardsData;
            
        });
    }

    const handleAddCard = () => {
        setCards(prevCards => [
            ...prevCards,
            <NewCard 
                key={++currKey} 
                id={prevCards.length}
                changeFrontCard={changeFrontCard} 
                changeBackCard={changeBackCard} 
            />  
        ]);

        setCardsData(prevCardsData => [
            ...prevCardsData,
            {
                id: prevCardsData.length,
                front: '',
                back: ''
            }
        ]);
    }

    return (
        <div className="NewDeck">
            <form onSubmit={handleSubmit}>
                <div className="form-header">
                    <h2>New Deck</h2>

                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            id="name"
                            minLength={2}
                            required
                            placeholder="Write the name here"/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="topic">Topic</label>
                        <select 
                            id="topic"
                            required>
                            <option key={0} value=''>Select the topic here</option>
                            {allTopics.map(topic => (
                                <option key={topic.id} value={topic.name}>{topic.emoji} {topic.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {cards.map(card => card)}

                <h4 onClick={handleAddCard}>+ Add Card</h4>

                <input type="submit" value="Create Deck" />
            </form>
        </div>
    );
}