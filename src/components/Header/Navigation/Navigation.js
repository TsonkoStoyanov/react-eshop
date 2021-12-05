import './Navigation.css';
import ReactLogo from './svg/logo.svg';
import { NavLink, Link } from 'react-router-dom'


const Navigation = () => {
    return (
        <nav className="site-nav">
            <Link className="site-logo" to="/"><img src={ReactLogo} alt="Site Logo" />Sneakers eShop</Link>
            <ul>
                <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/register">Register</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;
