import { Link } from 'react-router-dom';

import { useAuthContext } from '../../../contexts/AuthContext';

import ReactLogo from './svg/logo.svg';
import CartIcon from './CartIcon';
import './Navigation.css';


const Navigation = () => {
    const { user, isAuthenticated, isAdmin } = useAuthContext();

    const guestUsers = (
        <>
            <CartIcon />
            <li className='nav-item'><Link className='nav-link' to='/signin'>Sign In</Link></li>
        </>
    );

    const authUsers = (
        <>
            {!isAdmin &&

                <CartIcon />
            }

            <li className='nav-item'><Link className='nav-link' to='/signout'>Sign Out</Link></li>
        </>
    );

    return (
        <nav className='site-nav'>
            <Link className='site-logo' to='/'><img src={ReactLogo} alt='Site Logo' /><span>Sneakers eShop</span></Link>
            <ul>
                {user.username && <li className='nav-item'>Welcome, {user.username}</li>}

                {isAdmin && <li className='nav-item'><Link className='nav-link' to='/products/create'>Create Product</Link></li>
                }

                {isAuthenticated
                    ? authUsers
                    : guestUsers
                }

            </ul>
        </nav>
    )
}

export default Navigation;
