import btnExit from '../../img/btn-exit.png';
import { Link } from 'react-router-dom';
import './MenuGame.css';

export default function MenuGame() {
    return (
        <header className="MenuGame">
            <nav>
                <Link className='menu-item' style={{color: '#FFFFFF', textDecoration: 'none'}} to="/decks">
                    <img alt="Exit" src={btnExit} />
                    <span className="menu-text">Exit</span>
                </Link>
            </nav>
        </header>
    );
}