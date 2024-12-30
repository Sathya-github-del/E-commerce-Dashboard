import { useState } from 'react'
function Settings() {
    const [generalSettings, setGeneralSettings] = useState({
        storeName: 'My Store',
        email: 'admin@store.com',
        currency: 'USD',
        timezone: 'UTC',
        language: 'en'
    })

    const [notificationSettings, setNotificationSettings] = useState({
        orderConfirmation: true,
        lowStock: true,
        newCustomer: true,
        dailyReport: false
    })

    const [paymentSettings, setPaymentSettings] = useState({
        paypal: true,
        stripe: true,
        bankTransfer: false
    })

    const handleGeneralSubmit = (e) => {
        e.preventDefault()
        // Handle saving general settings
        console.log('Saving general settings:', generalSettings)
    }

    const handleNotificationSubmit = (e) => {
        e.preventDefault()
        // Handle saving notification settings
        console.log('Saving notification settings:', notificationSettings)
    }

    const handlePaymentSubmit = (e) => {
        e.preventDefault()
        // Handle saving payment settings
        console.log('Saving payment settings:', paymentSettings)
    }

    return (
        <div className="settings-page">
            <header className="page-header">
                <h1>Settings</h1>
            </header>

            <div className="settings-grid">
                <div className="settings-section">
                    <h2>General Settings</h2>
                    <form onSubmit={handleGeneralSubmit}>
                        <div className="form-group">
                            <label htmlFor="storeName">Store Name</label>
                            <input
                                type="text"
                                id="storeName"
                                value={generalSettings.storeName}
                                onChange={(e) => setGeneralSettings({
                                    ...generalSettings,
                                    storeName: e.target.value
                                })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Admin Email</label>
                            <input
                                type="email"
                                id="email"
                                value={generalSettings.email}
                                onChange={(e) => setGeneralSettings({
                                    ...generalSettings,
                                    email: e.target.value
                                })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="currency">Currency</label>
                            <select
                                id="currency"
                                value={generalSettings.currency}
                                onChange={(e) => setGeneralSettings({
                                    ...generalSettings,
                                    currency: e.target.value
                                })}
                            >
                                <option value="USD">USD ($)</option>
                                <option value="EUR">EUR (€)</option>
                                <option value="GBP">GBP (£)</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="timezone">Timezone</label>
                            <select
                                id="timezone"
                                value={generalSettings.timezone}
                                onChange={(e) => setGeneralSettings({
                                    ...generalSettings,
                                    timezone: e.target.value
                                })}
                            >
                                <option value="UTC">UTC</option>
                                <option value="EST">EST</option>
                                <option value="PST">PST</option>
                            </select>
                        </div>

                        <button type="submit" className="primary-button">Save General Settings</button>
                    </form>
                </div>

                <div className="settings-section">
                    <h2>Notification Settings</h2>
                    <form onSubmit={handleNotificationSubmit}>
                        <div className="form-group checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={notificationSettings.orderConfirmation}
                                    onChange={(e) => setNotificationSettings({
                                        ...notificationSettings,
                                        orderConfirmation: e.target.checked
                                    })}
                                />
                                Order Confirmation Emails
                            </label>
                        </div>

                        <div className="form-group checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={notificationSettings.lowStock}
                                    onChange={(e) => setNotificationSettings({
                                        ...notificationSettings,
                                        lowStock: e.target.checked
                                    })}
                                />
                                Low Stock Alerts
                            </label>
                        </div>

                        <div className="form-group checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={notificationSettings.newCustomer}
                                    onChange={(e) => setNotificationSettings({
                                        ...notificationSettings,
                                        newCustomer: e.target.checked
                                    })}
                                />
                                New Customer Notifications
                            </label>
                        </div>

                        <div className="form-group checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={notificationSettings.dailyReport}
                                    onChange={(e) => setNotificationSettings({
                                        ...notificationSettings,
                                        dailyReport: e.target.checked
                                    })}
                                />
                                Daily Report Emails
                            </label>
                        </div>

                        <button type="submit" className="primary-button">Save Notification Settings</button>
                    </form>
                </div>

                <div className="settings-section">
                    <h2>Payment Settings</h2>
                    <form onSubmit={handlePaymentSubmit}>
                        <div className="form-group checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={paymentSettings.paypal}
                                    onChange={(e) => setPaymentSettings({
                                        ...paymentSettings,
                                        paypal: e.target.checked
                                    })}
                                />
                                PayPal
                            </label>
                        </div>

                        <div className="form-group checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={paymentSettings.stripe}
                                    onChange={(e) => setPaymentSettings({
                                        ...paymentSettings,
                                        stripe: e.target.checked
                                    })}
                                />
                                Stripe
                            </label>
                        </div>

                        <div className="form-group checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={paymentSettings.bankTransfer}
                                    onChange={(e) => setPaymentSettings({
                                        ...paymentSettings,
                                        bankTransfer: e.target.checked
                                    })}
                                />
                                Bank Transfer
                            </label>
                        </div>

                        <button type="submit" className="primary-button">Save Payment Settings</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Settings 