import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [filters, setFilters] = useState({
        status: 'all',
        category: 'all',
        search: ''
    })

    return (
        <div className="products-page">
            <header className="page-header">
                <div className="header-content">
                    <h1>Products</h1>
                    <Link to="/products/new">
                        <button className="primary-button">Add Product</button>
                    </Link>
                </div>

                <div className="filters">
                    <input
                        type="search"
                        placeholder="Search products..."
                        value={filters.search}
                        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                    />
                    <select
                        value={filters.status}
                        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                    >
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="draft">Draft</option>
                        <option value="archived">Archived</option>
                    </select>
                </div>
            </header>

            <div className="products-grid">
                {/* Product cards will go here */}
            </div>
        </div>
    )
}
export default Products;