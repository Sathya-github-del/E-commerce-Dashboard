import { useState, useEffect } from 'react'
function Orders() {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const [filters, setFilters] = useState({
        status: 'all',
        dateRange: 'last30',
        search: ''
    })

    useEffect(() => {
        fetchOrders()
    }, [filters])

    const fetchOrders = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/orders')
            const data = await response.json()
            setOrders(data)
            setLoading(false)
        } catch (error) {
            console.error('Error fetching orders:', error)
            setLoading(false)
        }
    }

    const getStatusColor = (status) => {
        const colors = {
            'pending': 'bg-yellow-100 text-yellow-800',
            'processing': 'bg-blue-100 text-blue-800',
            'completed': 'bg-green-100 text-green-800',
            'cancelled': 'bg-red-100 text-red-800'
        }
        return colors[status] || 'bg-gray-100 text-gray-800'
    }

    return (
        <div className="orders-page">
            <header className="page-header">
                <div className="header-content">
                    <h1>Orders</h1>
                    <button className="primary-button">Export Orders</button>
                </div>

                <div className="filters">
                    <div className="search-field">
                        <input
                            type="search"
                            placeholder="Search orders..."
                            value={filters.search}
                            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                        />
                    </div>

                    <select
                        value={filters.status}
                        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                        className="filter-select"
                    >
                        <option value="all">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                    </select>

                    <select
                        value={filters.dateRange}
                        onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
                        className="filter-select"
                    >
                        <option value="today">Today</option>
                        <option value="last7">Last 7 days</option>
                        <option value="last30">Last 30 days</option>
                        <option value="last90">Last 90 days</option>
                    </select>
                </div>
            </header>

            <div className="orders-table-container">
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="6" className="loading-cell">Loading orders...</td>
                            </tr>
                        ) : orders.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="empty-cell">No orders found</td>
                            </tr>
                        ) : (
                            orders.map(order => (
                                <tr key={order.id}>
                                    <td>#{order.order_number}</td>
                                    <td>
                                        <div className="customer-info">
                                            <span className="customer-name">{order.customer_name}</span>
                                            <span className="customer-email">{order.customer_email}</span>
                                        </div>
                                    </td>
                                    <td>{new Date(order.created_at).toLocaleDateString()}</td>
                                    <td>
                                        <span className={`status-badge ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td>${order.total_amount.toFixed(2)}</td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="action-button view">View</button>
                                            <button className="action-button edit">Edit</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <div className="pagination">
                <button className="pagination-button" disabled>&lt; Previous</button>
                <span className="page-info">Page 1 of 1</span>
                <button className="pagination-button" disabled>Next &gt;</button>
            </div>
        </div>
    )
}

export default Orders 