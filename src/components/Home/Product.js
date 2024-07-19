import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import './ProductList.scss';
import '../../img/ProductList/luklak.png';


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7233/api/Product')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    return (
        // <div className="product-list">
        //     {products.map(product => (
        //         <div key={product.id} className="product-card">
        //             <img src={product.img} alt={product.nameProduct} />
        //             <h2>{product.nameProduct}</h2>
        //             <p>{product.information}</p>
        //             <p>${product.price}</p>
        //         </div>
        //     ))}
        // </div>
        <div className="product-list">
        <h2>Đồ Chơi</h2>
        <div className="category-tabs">
            <span className="active">Board Game</span>
            <span>Đồ Chơi Siêu Xe</span>
            <span>Xếp Hình - Lắp Ghép</span>
        </div>
        <div className="products">
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <img src={product.img} alt={product.nameProduct} />
                    <p className="product-name">{product.nameProduct}</p>
                    <p className="product-price">
                        <span className="new-price">{product.price}</span>
                    </p>
                </div>
            ))}
        </div>
        <Button className="custom-btn" variant="outline-danger" size="lg">Xem thêm</Button>
    </div>
    );
};

export default Product;