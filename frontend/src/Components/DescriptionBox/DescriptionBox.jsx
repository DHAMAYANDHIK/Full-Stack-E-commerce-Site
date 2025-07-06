import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform where businesses display their products or services for customers to browse and purchase.
           It includes pages like home, product listings, product details, about, and contact. The website helps users view product images,
           read descriptions, check prices, and find business information. It provides a convenient way for customers to explore items and learn 
           more about the business anytime, from anywhere.</p>
           <p>
           An e-commerce website also helps businesses reach a wider audience by making their products available to customers beyond their local area.
           It can be accessed through computers or mobile devices, allowing people to shop at their convenience. With clear product information and contact details, 
           it builds trust and makes it easier for customers to make informed decisions. Overall, it serves as a useful tool for promoting products and growing a business online. 
           </p>
      </div>
    </div>
  )
}

export default DescriptionBox
