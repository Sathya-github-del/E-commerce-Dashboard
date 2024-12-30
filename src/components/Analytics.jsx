import { useState, useEffect } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line, Bar, Doughnut } from 'react-chartjs-2'
// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
)
function Analytics() {
    const [timeframe, setTimeframe] = useState('month')
    const [loading, setLoading] = useState(true)
    const [stats, setStats] = useState({
        revenue: 0,
        orders: 0,
        customers: 0,
        avgOrderValue: 0
    })

    useEffect(() => {
        fetchAnalytics()
    }, [timeframe])

    const fetchAnalytics = async () => {
        try {
            // Simulated API call
            setLoading(false)
        } catch (error) {
            console.error('Error fetching analytics:', error)
            setLoading(false)
        }
    }

    const revenueData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Revenue',
                data: [3000, 4500, 3800, 5200, 4800, 6000],
                borderColor: '#5c6ac4',
                backgroundColor: 'rgba(92, 106, 196, 0.1)',
                tension: 0.4,
            }
        ]
    }

    const categoryData = {
        labels: ['Electronics', 'Clothing', 'Books', 'Home', 'Sports'],
        datasets: [
            {
                label: 'Sales by Category',
                data: [12000, 8000, 5000, 7000, 4000],
                backgroundColor: [
                    '#4f46e5',
                    '#7c3aed',
                    '#2563eb',
                    '#0891b2',
                    '#059669'
                ]
            }
        ]
    }

    const customerData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'New Customers',
                data: [15, 25, 18, 30, 22, 35, 28],
                backgroundColor: '#5c6ac4'
            }
        ]
    }

    return (
        <div className="analytics-page">
            <header className="page-header">
                <div className="header-content">
                    <h1>Analytics</h1>
                    <select
                        value={timeframe}
                        onChange={(e) => setTimeframe(e.target.value)}
                        className="timeframe-select"
                    >
                        <option value="week">Last 7 days</option>
                        <option value="month">Last 30 days</option>
                        <option value="quarter">Last 90 days</option>
                        <option value="year">Last 12 months</option>
                    </select>
                </div>
            </header>

            <div className="stats-overview">
                <div className="stat-card">
                    <h3>Total Revenue</h3>
                    <p className="stat-value">${stats.revenue.toLocaleString()}</p>
                    <span className="stat-change positive">+12.5% from last period</span>
                </div>
                <div className="stat-card">
                    <h3>Total Orders</h3>
                    <p className="stat-value">{stats.orders.toLocaleString()}</p>
                    <span className="stat-change positive">+8.2% from last period</span>
                </div>
                <div className="stat-card">
                    <h3>Total Customers</h3>
                    <p className="stat-value">{stats.customers.toLocaleString()}</p>
                    <span className="stat-change positive">+15.7% from last period</span>
                </div>
                <div className="stat-card">
                    <h3>Average Order Value</h3>
                    <p className="stat-value">${stats.avgOrderValue.toLocaleString()}</p>
                    <span className="stat-change positive">+5.3% from last period</span>
                </div>
            </div>

            <div className="charts-grid">
                <div className="chart-card full-width">
                    <h3>Revenue Over Time</h3>
                    <div className="chart-container">
                        <Line
                            data={revenueData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: {
                                        position: 'top',
                                    }
                                }
                            }}
                        />
                    </div>
                </div>

                <div className="chart-card">
                    <h3>Sales by Category</h3>
                    <div className="chart-container">
                        <Doughnut
                            data={categoryData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false
                            }}
                        />
                    </div>
                </div>

                <div className="chart-card">
                    <h3>New Customers</h3>
                    <div className="chart-container">
                        <Bar
                            data={customerData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics 