import React from 'react'
import ProductsList from './ProductsList';

function ProductTable({ products, filterText, isStockOnly }) {

    const list = [];

    products.forEach((product) => {
        if (product.name.toLowerCase().indexOf(
            filterText.toLowerCase()
        ) === -1) {
            return;
        }

        if (isStockOnly && product.inStock) {
            return;
        }

        list.push(
            <ProductsList
                product={product}
                key={product.id}
            />
        )
    });

    return (
        <div style={{ display: "flex", flexWrap:"wrap", justifyContent:"center"}} >
            {list}
        </div>
    )
}

export default ProductTable
