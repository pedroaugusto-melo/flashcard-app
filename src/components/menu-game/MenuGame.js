import btnExit from '../../img/btn-exit.png';
import { Link } from 'react-router-dom';
import './MenuGame.css';

export default function MenuGame() {
    return (
        <header className="MenuGame">
            <nav>
                <Link to="/decks">
                    <img alt="Exit" src={btnExit}/>
                </Link>
            </nav>
        </header>
    );
}