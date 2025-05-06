import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable';

function FilterableProductTable({ products }) {

    const [filterText, setFilterText] = useState("");
    const [isStockOnly, setIsStockOnly] = useState(false);

    return (
        <div>
            <SearchBar
                filterText={filterText}
                onFilterTextChange={setFilterText}

                isStockOnly={isStockOnly}
                onIsStockOnlyChange={setIsStockOnly}
            />

            <ProductTable
                products={products}
                filterText={filterText}
                isStockOnly={isStockOnly}
            />

        </div>
    )
}

export default FilterableProductTable
