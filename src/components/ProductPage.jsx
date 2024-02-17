/* eslint-disable react/prop-types */
// src/components/ProductPage.js

import './ProductPage.css';
import { useParams } from 'react-router-dom';
import {getProductByNumber } from '../data';
// eslint-disable-next-line no-unused-vars, react/prop-types
export default function ProductPage (){
  const {productId} = useParams();

  if (!productId) {
    // Xử lý khi params.productId không có giá trị
    return <div>params khong co gia tri.</div>;
  }

  const pr = getProductByNumber(parseInt(productId, 10));

  if (!pr) {
    // Xử lý khi không tìm thấy sản phẩm
    return <div>Sản phẩm không hợp lệ hoặc không tồn tại.</div>;
  }
  

  return ( 
    <div className="product-page">
      <div className="body1">
          <img src={pr.userPhoto} alt="Product" />        
        <div className="info-container">
          <div className="details">
            <div className="author">{pr.name}</div>
            <div className="title">{pr.product}</div>
            <div className="image-info">
              <p>Kích thước: 564x317</p>
              <div className='price'>Giá tiền: {pr.price}</div>
            </div>
          </div>
          <div className="actions">
            <textarea placeholder="Lý do " className="reject-reason"></textarea>
            <button className="reject-button">Không duyệt</button>
            <div className="posting-time">Thời gian đăng: 2024-01-15 12:00 PM</div>
            <button className="approve-button">Duyệt</button>
          </div>
        </div>
        
      </div>
      </div>
  );
}

