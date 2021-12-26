import { Link } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';
import { useAuthContext } from '../../../../contexts/AuthContext';
import { useWishListContext } from '../../../../contexts/WishListContext';
import './WishListIcon.css';

const WishListIcon = () => {

    const { isAuthenticated } = useAuthContext();
    const { wishListCount  } = useWishListContext();        

    return (
        <li className='nav-item wishlist-icon'>
            <Link to={isAuthenticated ? '/wishlist' : '/signin'}>
                <BsHeart />
                {wishListCount > 0 ? <span className='wishlist-items-count'>{wishListCount}</span> : null}
            </Link>
        </li>
    )
}

export default WishListIcon;
