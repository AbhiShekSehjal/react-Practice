import React from 'react'

function SearchBar({ filterText, onFilterTextChange, isStockOnly, onIsStockOnlyChange }) {
    return (
        <div className="filter-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
            />
            <div className="checkbox-container">
                <input
                    type="checkbox"
                    id="stockOnly"
                    checked={isStockOnly}
                    onChange={(e) => onIsStockOnlyChange(e.target.checked)}
                />
                <label htmlFor="stockOnly">Out off stock product</label>
            </div>
        </div>

    )
}

export default SearchBar
