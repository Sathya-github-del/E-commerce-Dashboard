import { useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

function Dashboard() {
    const [stats, setStats] = useState({
        totalSales: 0,
        totalOrders: 0,
        totalCustomers: 0,
        totalProducts: 0,
    })
    const [recentOrders, setRecentOrders] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDashboardData()
    }, [])

    const fetchDashboardData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/dashboard/stats')
            const data = await response.json()
            setStats(data)
            setLoading(false)
        } catch (error) {
            console.error('Error fetching dashboard data:', error)
            setLoading(false)
        }
    }

    const salesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Sales',
                data: [3000, 4500, 3800, 5200, 4800, 6000],
                borderColor: '#5c6ac4',
                backgroundColor: 'rgba(92, 106, 196, 0.1)',
                tension: 0.4,
            },
        ],
    }

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Dashboard</h1>
                <div className="date-filter">
                    <select defaultValue="last30">
                        <option value="last7">Last 7 days</option>
                        <option value="last30">Last 30 days</option>
                        <option value="last90">Last 90 days</option>
                    </select>
                </div>
            </header>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon">💰</div>
                    <div className="stat-content">
                        <h3>Total Sales</h3>
                        <p className="stat-value">${stats.totalSales?.toLocaleString()}</p>
                        <span className="stat-change positive">+12.5% from last month</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">📦</div>
                    <div className="stat-content">
                        <h3>Orders</h3>
                        <p className="stat-value">{stats.totalOrders}</p>
                        <span className="stat-change positive">+5.2% from last month</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">👥</div>
                    <div className="stat-content">
                        <h3>Customers</h3>
                        <p className="stat-value">{stats.totalCustomers}</p>
                        <span className="stat-change positive">+8.1% from last month</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">📊</div>
                    <div className="stat-content">
                        <h3>Products</h3>
                        <p className="stat-value">{stats.totalProducts}</p>
                        <span className="stat-change neutral">No change</span>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid">
                <div className="chart-card">
                    <h3>Sales Overview</h3>
                    <Line data={salesData} options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                        },
                    }} />
                </div>

                <div className="recent-orders-card">
                    <h3>Recent Orders</h3>
                    <div className="orders-list">
                        {recentOrders.map(order => (
                            <div key={order.id} className="order-item">
                                <div className="order-info">
                                    <strong>#{order.order_number}</strong>
                                    <span>{order.customer_name}</span>
                                </div>
                                <div className="order-status">
                                    <span className={`status ${order.status}`}>{order.status}</span>
                                    <span className="order-amount">${order.total_amount}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard 