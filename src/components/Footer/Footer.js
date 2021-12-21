import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='site-footer'>
            <p><small>&copy; Copyright {year}, Sneakers eShop</small></p>
        </footer>
    )
}

export default Footer
