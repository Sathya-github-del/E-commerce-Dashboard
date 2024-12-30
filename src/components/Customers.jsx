import { useState, useEffect } from 'react'
function Customers() {
    const [customers, setCustomers] = useState([])
    const [loading, setLoading] = useState(true)
    const [filters, setFilters] = useState({
        search: '',
        sortBy: 'recent',
        segment: 'all'
    })

    useEffect(() => {
        fetchCustomers()
    }, [filters])

    const fetchCustomers = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/customers')
            const data = await response.json()
            setCustomers(data)
            setLoading(false)
        } catch (error) {
            console.error('Error fetching customers:', error)
            setLoading(false)
        }
    }

    const getCustomerSegment = (totalSpent) => {
        if (totalSpent > 1000) return 'VIP'
        if (totalSpent > 500) return 'Regular'
        return 'New'
    }

    return (
        <div className="customers-page">
            <header className="page-header">
                <div className="header-content">
                    <h1>Customers</h1>
                    <div className="header-actions">
                        <button className="secondary-button">Import</button>
                        <button className="primary-button">Add Customer</button>
                    </div>
                </div>

                <div className="filters">
                    <div className="search-field">
                        <input
                            type="search"
                            placeholder="Search customers..."
                            value={filters.search}
                            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                        />
                    </div>

                    <select
                        value={filters.sortBy}
                        onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                        className="filter-select"
                    >
                        <option value="recent">Most Recent</option>
                        <option value="orders">Most Orders</option>
                        <option value="spent">Highest Spent</option>
                    </select>

                    <select
                        value={filters.segment}
                        onChange={(e) => setFilters({ ...filters, segment: e.target.value })}
                        className="filter-select"
                    >
                        <option value="all">All Segments</option>
                        <option value="vip">VIP</option>
                        <option value="regular">Regular</option>
                        <option value="new">New</option>
                    </select>
                </div>
            </header>

            <div className="customers-grid">
                {loading ? (
                    <div className="loading">Loading customers...</div>
                ) : customers.length === 0 ? (
                    <div className="empty-state">
                        <h3>No customers found</h3>
                        <p>Try adjusting your search or filters</p>
                    </div>
                ) : (
                    customers.map(customer => (
                        <div key={customer.id} className="customer-card">
                            <div className="customer-header">
                                <img
                                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(customer.first_name + ' ' + customer.last_name)}&background=random`}
                                    alt={`${customer.first_name} ${customer.last_name}`}
                                    className="customer-avatar"
                                />
                                <div className="customer-info">
                                    <h3>{customer.first_name} {customer.last_name}</h3>
                                    <span className="customer-email">{customer.email}</span>
                                </div>
                                <span className={`segment-badge ${getCustomerSegment(customer.total_spent).toLowerCase()}`}>
                                    {getCustomerSegment(customer.total_spent)}
                                </span>
                            </div>

                            <div className="customer-stats">
                                <div className="stat">
                                    <span className="stat-label">Orders</span>
                                    <span className="stat-value">{customer.total_orders}</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-label">Total Spent</span>
                                    <span className="stat-value">${customer.total_spent.toFixed(2)}</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-label">Last Order</span>
                                    <span className="stat-value">{customer.last_order_date ? new Date(customer.last_order_date).toLocaleDateString() : 'Never'}</span>
                                </div>
                            </div>

                            <div className="customer-actions">
                                <button className="action-button">View Profile</button>
                                <button className="action-button">Send Email</button>
                                <button className="action-button edit">Edit</button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="pagination">
                <button className="pagination-button" disabled>&lt; Previous</button>
                <span className="page-info">Page 1 of 1</span>
                <button className="pagination-button" disabled>Next &gt;</button>
            </div>
        </div>
    )
}

export default Customers 