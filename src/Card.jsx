import "./Card.css";
import { useCart } from "./context/CartContext";

export default function Card({ product }) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.images[0]
        });
    };

    return (
        <div className="card">
            <div className="image"><img src={product.images[0]} alt={product.title} /></div>
            <div className="title">
                <div className="con">
                    {product.title}
                </div>
                <div className="price">
                    ${product.price.toFixed(2)}
                </div>
                <div className="lin">
                    <button onClick={handleAddToCart} className="add">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}