import { useCart } from "./context/CartContext";
import "./Cart.css";

export default function Cart() {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="cart">
                <h1>Your Cart</h1>
                <div className="empty-cart">
                    <p>Your cart is empty</p>
                    <a href="/shop" className="shop-link">Continue Shopping</a>
                </div>
            </div>
        );
    }

    return (
        <div className="cart">
            <div className="cart-header">
                <h1>Your Cart</h1>
                <button onClick={clearCart} className="clear-btn">Clear Cart</button>
            </div>

            <div className="cart-items">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <div className="cart-item-image">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="cart-item-details">
                            <h3>{item.title}</h3>
                            <p className="item-price">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="cart-item-quantity">
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="qty-btn"
                            >
                                -
                            </button>
                            <span className="qty-value">{item.quantity}</span>
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="qty-btn"
                            >
                                +
                            </button>
                        </div>
                        <div className="cart-item-total">
                            ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="remove-btn"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <div className="cart-total">
                    <span>Total:</span>
                    <span className="total-amount">${getCartTotal().toFixed(2)}</span>
                </div>
                <button className="checkout-btn">Proceed to Checkout</button>
            </div>
        </div>
    );
}