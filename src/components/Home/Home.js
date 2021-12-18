import{ useEffect, useState } from 'react'

import ProductList from '../Products/ProductList';

import * as productService from '../../services/productService'

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getAll()
            .then(result => {
                setProducts(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <section className="product-list">
             <ProductList products={products} />
        </section>
    )
}

export default Home;
