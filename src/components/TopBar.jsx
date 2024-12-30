import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function TopBar({ toggleSidebar, toggleDarkMode }) {
    const [showUserMenu, setShowUserMenu] = useState(false)
    const [showNotifications, setShowNotifications] = useState(false)
    const navigate = useNavigate()

    return (
        <header className="top-bar">
            <div className="left-section">
                <button className="menu-button" onClick={toggleSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                    </svg>
                </button>
                <div className="search-bar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                    <input type="search" placeholder="Search..." />
                </div>
            </div>

            <div className="right-section">
                <button className="icon-button" onClick={toggleDarkMode}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
                    </svg>
                </button>

                <button
                    className="icon-button"
                    onClick={() => setShowNotifications(!showNotifications)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                    </svg>
                    <span className="notification-badge">3</span>
                </button>

                <div className="user-menu">
                    <button
                        className="user-button"
                        onClick={() => setShowUserMenu(!showUserMenu)}
                    >
                        <img
                            src="https://ui-avatars.com/api/?name=Admin+User"
                            alt="User avatar"
                            className="avatar"
                        />
                    </button>

                    {showUserMenu && (
                        <div className="dropdown-menu">
                            <button onClick={() => navigate('/profile')}>Profile</button>
                            <button onClick={() => navigate('/settings')}>Settings</button>
                            <button onClick={() => navigate('/logout')}>Logout</button>
                        </div>
                    )}
                </div>
            </div>

            {showNotifications && (
                <div className="notifications-dropdown">
                    <div className="notification-item">
                        <span className="notification-title">New Order</span>
                        <span className="notification-desc">Order #1234 received</span>
                        <span className="notification-time">5 min ago</span>
                    </div>
                    <div className="notification-item">
                        <span className="notification-title">Low Stock Alert</span>
                        <span className="notification-desc">Product XYZ is running low</span>
                        <span className="notification-time">1 hour ago</span>
                    </div>
                </div>
            )}
        </header>
    )
}

export default TopBar 