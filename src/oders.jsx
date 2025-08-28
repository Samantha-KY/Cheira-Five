import { useContext, useMemo } from "react";
import { CartContext } from "./cartcontext";

function Orders() {
  const { cart, clearCart } = useContext(CartContext);

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const handlePlaceOrder = () => {
    alert("✅ Your order has been placed successfully! 🍽️");
    clearCart();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Your Orders</h1>

      {cart.length === 0 ? (
        <p>No items in your order yet.</p>
      ) : (
        <div>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "20px",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "2px solid black" }}>
                <th style={{ textAlign: "left", padding: "8px" }}>Item</th>
                <th style={{ textAlign: "center", padding: "8px" }}>Qty</th>
                <th style={{ textAlign: "right", padding: "8px" }}>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "8px" }}>{item.name}</td>
                  <td style={{ textAlign: "center", padding: "8px" }}>
                    {item.quantity}
                  </td>
                  <td style={{ textAlign: "right", padding: "8px" }}>
                    {item.price * item.quantity} RWF
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Total: {totalPrice} RWF</h3>

          <button
            onClick={handlePlaceOrder}
            style={{
              padding: "10px 20px",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Orders;
