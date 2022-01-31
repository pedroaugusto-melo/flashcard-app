export default function GameCard(props) {
    const { card, cardNumber, totalCards } = props;
    
    return (
        <div>
            <h3>Card {cardNumber + 1} of {totalCards}</h3>
            <h3>{card.front}</h3>
            <h3>{card.back}</h3>
        </div>
    );
}