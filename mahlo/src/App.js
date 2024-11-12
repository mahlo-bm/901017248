import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link for navigation
import './App.css';
import Auth from './Auth';
import Dashboard from './Dashboard';
import ProductManagement from './ProductManagement';
import UserManagement from './UserManagement';
import StockManagement from './StockManagement';
import ProductList from './ProductList';
import UserList from './UserList';
import StockList from './StockList';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <div className="container">
                <header>
                    <h1>WELCOME TO WINGS-CAFE INVENTORY!</h1>
                    {isAuthenticated && (
                        <nav>
                            <Link to="/dashboard"><button>Dashboard</button></Link>
                            <Link to="/product-management"><button>Product Management</button></Link>
                            <Link to="/user-management"><button>User Management</button></Link>
                            <Link to="/stock-management"><button>Stock Management</button></Link>
                            <Link to="/product-list"><button>Total Product</button></Link>
                            <Link to="/user-list"><button>Total User</button></Link>
                            <Link to="/stock-list"><button>Total Stock</button></Link>
                            <button onClick={handleLogout}>Logout</button>
                        </nav>
                    )}
                </header>
                
                <Routes>
                    <Route path="/" element={isAuthenticated ? <Dashboard /> : <Auth onLogin={handleLogin} />} />
                    <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Auth onLogin={handleLogin} />} />
                    <Route path="/product-management" element={isAuthenticated ? <ProductManagement /> : <Auth onLogin={handleLogin} />} />
                    <Route path="/user-management" element={isAuthenticated ? <UserManagement /> : <Auth onLogin={handleLogin} />} />
                    <Route path="/stock-management" element={isAuthenticated ? <StockManagement /> : <Auth onLogin={handleLogin} />} />
                    <Route path="/product-list" element={isAuthenticated ? <ProductList /> : <Auth onLogin={handleLogin} />} />
                    <Route path="/user-list" element={isAuthenticated ? <UserList /> : <Auth onLogin={handleLogin} />} />
                    <Route path="/stock-list" element={isAuthenticated ? <StockList /> : <Auth onLogin={handleLogin} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;