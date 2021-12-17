import { NavLink, Link } from 'react-router-dom';

import { useAuthContext } from '../../../contexts/AuthContext';

import ReactLogo from './svg/logo.svg';
import './Navigation.css';


const Navigation = () => {
    const { user, isAuthenticated, isAdmin } = useAuthContext();    

    return (
        <nav className="site-nav">
            <Link className="site-logo" to="/"><img src={ReactLogo} alt="Site Logo" />Sneakers eShop</Link>
            <ul>
                {user.username && <li className="nav-item">Welcome, {user.username}</li>}
                
                {isAdmin
                    ? <li className="nav-item"><NavLink className="nav-link" to="/product/add">Add Porduct</NavLink></li>
                    : ""
                }
                
                {isAuthenticated                    
                    ? <li className="nav-item"><NavLink className="nav-link" to="/signout">Sign Out</NavLink></li>
                    : <li className="nav-item"><NavLink className="nav-link" to="/signin">Sign In</NavLink></li>
                }
            </ul>
        </nav>
    )
}

export default Navigation;
