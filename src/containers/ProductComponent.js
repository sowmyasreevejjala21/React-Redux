import React from "react";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state)=> state.allProducts.products);

    const renderList = products.map((product) => {
        const {id, title, price, image, category} = product;
        return(
            <Link to={`/product/${id}`}>
            <div className="four column wide">
                <div className="ui link cards">
                    <div className="card">
                        <div className="image"><img src={image} alt="image" /></div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta price"> {category}</div>
                        </div>
                    </div>
                </div>
                
            </div>
            </Link>

        )
    })

    return (
        <>{renderList}</>
    )
}

export default ProductComponent;