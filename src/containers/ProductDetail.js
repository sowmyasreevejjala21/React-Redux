import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { fetchProduct, removeSelectedProducts } from "../redux/actions/productActions";

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const {title, price, image,description, category} = product;
    const { productID } =  useParams();
    const dispatch =  useDispatch();
    console.log(product);
    
    // const fetchProduct =async () => {
    //     const response =  await axios.get(`https://fakestoreapi.com/products/${productID}`).catch((err)=>{
    //         console.log(err);
    //     });
    //     dispatch(selectedProducts(response.data));
    // }

    useEffect(()=>{
        if(productID && productID !=="")  dispatch(fetchProduct(productID));

        return () =>{
            dispatch(removeSelectedProducts())
        }
    }, productID)


    return(
      <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
            <div>Loading...</div>
        ):
        (
            <div className="ui placeholder segment"> 
                <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical aligned">
                        AND
                    </div>
                    <div className="middle aligned row">
                        <div className="column lp">
                            <img src={image} alt = {image}/>
                        </div>
                        <div className="column rp">
                            <h1>{title}</h1>
                            <h2>
                                <a className="ui teal tag label"> ${price}</a>
                            </h2>
                            <h3 className="ui brown block header">{category}</h3>
                            <p>{description}</p>
                            <div className="ui vertical animated button">
                                <div className="hidden content">
                                    <i className="shop icon"></i>
                                </div>
                                <div className="visible content">Add to Cart</div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        )
        }
      </div>   
    )
}

export default ProductDetail;