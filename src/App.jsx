import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useContext, useMemo } from "react";
import { CartContext } from "./cartcontext";
import Menu from "./menu";
import Orders from "./oders";
import { FaUtensils, FaShoppingCart, FaHome } from 'react-icons/fa';
import './App.css';

function App() {
  const { cart } = useContext(CartContext);
  const location = useLocation();
  
  const totalCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-brand">
          <FaUtensils className="nav-icon" />
          <span>Cheira Five</span>
        </div>
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            <FaHome className="nav-icon" />
            <span>Menu</span>
          </Link>
          <Link 
            to="/orders" 
            className={`nav-link ${location.pathname === '/orders' ? 'active' : ''}`}
          >
            <FaShoppingCart className="nav-icon" />
            <span>Orders</span>
            {totalCount > 0 && (
              <span className="cart-badge">
                {totalCount}
              </span>
            )}
          </Link>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Cheira Five. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
