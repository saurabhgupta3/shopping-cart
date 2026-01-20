import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({image, title}) {
    return (
        <div className="card">
            <div className="image"><img src={image} alt="image" /></div>
            <div className="title">
                <div className="con">
                    {title}
                </div>
                <div className="lin">
                    <Link to={"/cart"} className="add">add to cart</Link>
                </div>
            </div>
        </div>
    )
}