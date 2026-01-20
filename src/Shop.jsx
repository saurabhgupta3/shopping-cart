import { useState, useEffect } from "react";
import "./Shop.css";
import Card from "./Card";


export default function Shop() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(res => {
            setData(res);
            console.log(res);
        });
    }, []);
    if(!data) return <>Loading....</>
    return (
        <div className="shop">
            {data.products.map(item => (
        <div key={item.id} className="item">
            <Card image={item.images[0]} title={item.title}/>
        </div>
    ))}
        </div>
    )
}