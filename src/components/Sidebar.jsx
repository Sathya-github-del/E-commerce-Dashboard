import { Link, useLocation } from 'react-router-dom'
function Sidebar({ isOpen }) {
    const location = useLocation()

    const menuItems = [
        { path: '/', icon: '📊', label: 'Dashboard' },
        { path: '/products', icon: '📦', label: 'Products' },
        { path: '/orders', icon: '🛍️', label: 'Orders' },
        { path: '/customers', icon: '👥', label: 'Customers' },
        { path: '/analytics', icon: '📈', label: 'Analytics' },
        { path: '/settings', icon: '⚙️', label: 'Settings' },
    ]

    return (
        <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="logo">
                <h1>Store Admin</h1>
            </div>
            <nav>
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="label">{item.label}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar;