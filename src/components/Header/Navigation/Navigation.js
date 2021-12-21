import { Link } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';

import { useAuthContext } from '../../../contexts/AuthContext';
import { useCartContext } from '../../../contexts/CartContext';

import ReactLogo from './svg/logo.svg';
import './Navigation.css';


const Navigation = () => {
    const { user, isAuthenticated, isAdmin } = useAuthContext();
    const { itemCount } = useCartContext();
    const count = (itemCount > 0
        ? <span className='bag-items-count'>{itemCount}</span>
        : null
    )
    return (
        <nav className='site-nav'>
            <Link className='site-logo' to='/'><img src={ReactLogo} alt='Site Logo' /><span>Sneakers eShop</span></Link>
            <ul>
                {user.username && <li className='nav-item'>Welcome, {user.username}</li>}

                {isAdmin
                    ? <li className='nav-item'><Link className='nav-link' to='/products/create'>Create Porduct</Link></li>
                    : <li className='nav-item bag-icon'><BsBag />{count}</li>
                }

                {isAuthenticated
                    ? <li className='nav-item'><Link className='nav-link' to='/signout'>Sign Out</Link></li>
                    : <li className='nav-item'><Link className='nav-link' to='/signin'>Sign In</Link></li>
                }
            </ul>
        </nav>
    )
}

export default Navigation;
