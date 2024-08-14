// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';
import { FaUsers, FaTshirt, FaShoppingCart, FaSearch, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <aside className="sidebar">
                <nav>
                    <ul>
                        <li className="tooltip"><FaUsers className="icon"/><span className="tooltiptext">Customers</span></li>
                        <li className="tooltip"><FaTshirt className="icon"/><span className="tooltiptext">Inventory</span></li>
                        <li className="tooltip"><FaShoppingCart className="icon"/><span className="tooltiptext">Orders</span></li>
                    </ul>
                </nav>
                <button className="logout"><FaSignOutAlt className="icon"/></button>
            </aside>
            <main className="main-content">
                <header className="header">
                    <h1>Admin Dashboard</h1>
                    <div className="header-right">
                        {/* <div className="search-bar">
                            <FaSearch className="search-icon" />
                            <input type="text" placeholder="Search..." />
                        </div> */}
                        <div className="user-profile">
                            <img src="https://via.placeholder.com/40" alt="User"/>
                            <div className="user-dropdown">
                                <p>Profile</p>
                                <p>Settings</p>
                                <p>Logout</p>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="statistics">
                    <div className="stat-card gradient-card">
                        <h2>500+</h2>
                        <p>Customers</p>
                    </div>
                    <div className="stat-card gradient-card">
                        <h2>200+</h2>
                        <p>Items Available</p>
                    </div>
                    <div className="stat-card gradient-card">
                        <h2>150+</h2>
                        <p>Orders Processed</p>
                    </div>
                </section>
                {/* <section className="recent-activities">
                    <h2>Recent Activities</h2>
                    <ul>
                        <li><FaUsers className="icon"/> New Customer added: Jane Doe</li>
                        <li><FaShoppingCart className="icon"/> Order #12345 placed: 3 items</li>
                        <li><FaTshirt className="icon"/> Inventory updated: 10 new dresses added</li>
                    </ul>
                </section> */}
            </main>
        </div>
    );
};

export default Dashboard;
