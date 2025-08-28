import { useState, useContext, useMemo } from "react";
import { CartContext } from "./cartcontext";
import { FaSearch, FaPlus, FaMinus, FaUtensils, FaWineGlassAlt, FaShoppingCart } from 'react-icons/fa';

function Menu() {
  const [menuItems] = useState([
    { 
      id: 1, 
      name: "Grilled Chicken", 
      price: 8000, 
      type: "Food",
      description: "Juicy grilled chicken breast with herbs and spices, served with roasted vegetables.",
      // image: "https://images.unsplash.com/photo-1532550907401-a499facaa672?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    { 
      id: 2, 
      name: "Beef Burger", 
      price: 6000, 
      type: "Food",
      description: "Classic beef patty with cheese, lettuce, tomato, and special sauce on a brioche bun.",
      // image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    { 
      id: 3, 
      name: "Fried Fish", 
      price: 7000, 
      type: "Food",
      description: "Crispy fried fish fillet with tartar sauce and lemon wedges, served with fries.",
      // image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    { 
      id: 4, 
      name: "Orange Juice", 
      price: 3000, 
      type: "Drink",
      description: "Freshly squeezed orange juice, served chilled.",
      // image: "https://images.unsplash.com/photo-1612230668424-60de3a9c8c5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    { 
      id: 5, 
      name: "Cold Fanta", 
      price: 2000, 
      type: "Drink",
      description: "Refreshing orange Fanta, served ice cold.",
      // image: "https://images.unsplash.com/photo-1622480771645-0fe855c6f1e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
  ]);

  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  
  // Debug cart state
  console.log('Current cart:', cart);

  const filteredMenuItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
      const matchesType = selectedType === "All" || item.type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [menuItems, searchText, selectedType]);

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const getItemCount = (id) => {
    const item = cart.find(item => item.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1 className="menu-title">
          Our Delicious Menu 
          <span className="menu-subtitle">Fresh & Tasty</span>
        </h1>
        
        <div className="menu-filters">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${selectedType === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedType('All')}
            >
              All Items
            </button>
            <button 
              className={`filter-btn ${selectedType === 'Food' ? 'active' : ''}`}
              onClick={() => setSelectedType('Food')}
            >
              <FaUtensils className="filter-icon" /> Food
            </button>
            <button 
              className={`filter-btn ${selectedType === 'Drink' ? 'active' : ''}`}
              onClick={() => setSelectedType('Drink')}
            >
              <FaWineGlassAlt className="filter-icon" /> Drinks
            </button>
          </div>
        </div>
      </div>

      {filteredMenuItems.length === 0 ? (
        <div className="no-items">
          <p>No items found. Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="menu-grid">
          {filteredMenuItems.map((item) => (
            <div key={item.id} className="menu-item card fade-in">
              <div className="item-image-container">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="item-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                  }}
                />
                <div className="item-type-badge">
                  {item.type === 'Food' ? <FaUtensils /> : <FaWineGlassAlt />}
                  <span>{item.type}</span>
                </div>
              </div>
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
                <div className="item-footer">
                  <span className="item-price">{item.price.toLocaleString()} RWF</span>
                  {getItemCount(item.id) === 0 ? (
                    <button 
                      onClick={() => addToCart(item)}
                      className="add-to-cart-btn"
                    >
                      <FaPlus /> Add to Cart
                    </button>
                  ) : (
                    <div className="quantity-controls">
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="quantity-btn"
                      >
                        <FaMinus />
                      </button>
                      <span className="quantity">{getItemCount(item.id)}</span>
                      <button 
                        onClick={() => addToCart(item)}
                        className="quantity-btn"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="order-summary card">
          <h2 className="order-title">
            <FaShoppingCart /> Your Order
          </h2>
          <div className="order-items">
            {cart.map((item) => (
              <div key={item.id} className="order-item">
                <div className="order-item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">
                    {item.price.toLocaleString()} RWF × {item.quantity}
                  </span>
                </div>
                <div className="order-item-actions">
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="quantity-btn"
                  >
                    <FaMinus />
                  </button>
                  <span className="item-total">
                    {(item.price * item.quantity).toLocaleString()} RWF
                  </span>
                  <button 
                    onClick={() => addToCart(item)}
                    className="quantity-btn"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="order-total">
            <span>Total:</span>
            <span className="total-amount">{totalPrice.toLocaleString()} RWF</span>
          </div>
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu;
