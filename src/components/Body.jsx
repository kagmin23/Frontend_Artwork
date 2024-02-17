// src/components/Body.js
// import { Link } from 'react-router-dom';
import "./Body.css";
// eslint-disable-next-line no-unused-vars
import { infor } from "../data";
import { getProduct } from "../data";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Body({userPhoto, name, product}) {
  const products = getProduct();
  return (
    <div className="bodys">
      
          {/* <div className="image-container"> */}
          <div className="body">
          {products.map((ins) => (
          <div key={ins.id} className="box">
            <Link to={`/productPage/${ins.id}`}>
              <div className="overlay"></div>
              <img src={ins.userPhoto} alt="" />
            </Link>
                      <div className="details">
                      <div className="author">{ins.name}</div>
                      <div  className="title">{ins.product}</div>
                    </div>   
                    </div>                    
      ))}
      
          </div> 
    </div>
  );
}

