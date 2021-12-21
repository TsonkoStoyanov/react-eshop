import ProductCard from '../../Common/ProductCard';

import './ProductList.css'

const ProductList = ({ products }) => {

    return (
        <section className='section-products'>            
            {products.length > 0
                ? (
                    <ul className='products-list'>
                        {products.map(p => <ProductCard key={p.id} product={p} />)}
                    </ul>
                ) 
                : <p className='no-result'>No products!</p>
            }            
        </section>
    )
}

export default ProductList;
