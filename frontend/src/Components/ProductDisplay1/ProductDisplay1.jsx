import React, { useContext } from 'react'
import './ProductDisplay1.css'
import {ShopContext} from '../../Context/ShopContext'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay1 = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className = 'productdisplay'>
    <div className="productdisplay-left">
       <div className="productdisplay-img-list">
         <img src={product.image} alt="" />
         <img src={product.image} alt="" />
         <img src={product.image} alt="" />
         <img src={product.image} alt="" />
        </div> 
          <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
          </div>
    </div>
    <div className="productdisplay-right">
       <h1>{product.name}</h1>
       <div className="productdisplay-right-stars">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_dull_icon} alt="" />
        <p>(122)</p>
       </div>
       <div className="productdisplay-right-prices">
         <div className="productdisplay-right-price-old">${product.old_price}</div>
         <div className="productdisplay-right-price-new">${product.new_price}</div>
       </div>
       <div className="productdisplay-right-description">
        Crafted from quality materials, this apparel item delivers comfort, durability, and a stylish look for all occasions.
       </div>
        <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
    </div>
    
    </div>
  )
}
export default ProductDisplay1
