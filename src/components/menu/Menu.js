import { Link } from "react-router-dom";

import btnTopics from '../../img/btn-topics.png';
import btnAdd from '../../img/btn-add.png';
import btnDecks from '../../img/btn-decks.png';

import './Menu.css';

export default function Menu() {
    return (
        <header className="Menu">
            <nav>
                <Link to="/topics">
                    <img alt="Topics" src={btnTopics}/>
                </Link>

                <Link to="/new-deck">
                    <img alt="New Deck" src={btnAdd} />
                </Link>

                <Link to="/decks">
                    <img alt="Decks" src={btnDecks} />
                </Link>
            </nav>
        </header>
    );
}