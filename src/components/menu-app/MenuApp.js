import { Link } from "react-router-dom";

import btnTopics from '../../img/btn-topics.png';
import btnAdd from '../../img/btn-add.png';
import btnDecks from '../../img/btn-decks.png';

import './MenuApp.css';

export default function Menu() {
    return (
        <header className="Menu">
            <nav>
                <Link style={{color: '#FFFFFF', textDecoration: 'none'}} className="menu-item" to="/topics">
                    <img alt="Topics" src={btnTopics}/>
                    <span className="menu-text">Topics</span>
                </Link>

                <Link style={{color: '#FFFFFF', textDecoration: 'none'}} className="menu-item" to="/new-deck">
                    <img alt="New Deck" src={btnAdd} />
                    <span className="menu-text">New Deck</span>
                </Link>

                <Link style={{color: '#FFFFFF', textDecoration: 'none'}} className="menu-item" to="/decks">
                    <img alt="Decks" src={btnDecks} />
                    <span className="menu-text">Decks</span>
                </Link>
            </nav>
        </header>
    );
}