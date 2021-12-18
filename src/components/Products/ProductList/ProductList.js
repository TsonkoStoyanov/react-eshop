import ProductCard from "../../Common/ProductCard";

const ProductList = ({products}) => {

    return (
        <div>
            <ul>
            {products.length > 0
                ? (
                    <ul className="products-list">
                        {products.map(p => <ProductCard key={p.id} product={p} />)}
                    </ul>
                ) 
                : <p className="no-result">No products!</p>
            }
            </ul>
        </div>
    )
}

export default ProductList;
