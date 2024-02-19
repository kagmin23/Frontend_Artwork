import React, { useState } from 'react';
import "./HomePage.css";
import ReactPaginate from 'react-paginate';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [products, setProducts] = useState([
    {
        id: 1,
        name: 'Pintura de aguja',
        author: 'Bélen Rodríguez González',
        price: '€9,300',
        imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.1_eSk3QxQI3d1cTL1PnvjQHaHa&pid=Api&P=0&h=180',
        liked: false,
    },
    {
        id: 2,
        name: 'Ring of Fire No. 2',
        author: 'GC Myers',
        price: 'US$650',
        imageUrl: 'https://a.1stdibscdn.com/hunt-slonem-paintings-matt-for-sale/a_13872/1604085634504/CSR0958_master.jpg',
        liked: false,
    },
    // Add more products as needed
    {
        id: 3,
        name: 'Couleurs Nocturnes',
        author: 'Cathy Tabbakh',
        price: 'US$2,450',
        imageUrl: 'http://www.lucaseilers.com/wp-content/uploads/2014/11/yellow-bunny-612x729.jpg',
        liked: false,
    },
    {
        id: 4,
        name: 'Budapest Pastry XIX',
        author: 'George Bartko',
        price: 'US$1,200',
        imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.NVq_UpwcTtN9BAnbVtSStwHaGD&pid=Api&P=0&h=180',
        liked: false,
    },
    {
        id: 5,
        name: 'Landed Boat',
        author: 'Gary Peabody',
        price: 'US$100',
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.Js_IWjoYcVj4O0hWhD5WsgHaJ4&pid=Api&P=0&h=180',
        liked: false,
    },
    {
      id: 6,
      name: 'Sản phẩm 6',
      author: 'Tác giả F',
      price: '$35',
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.3thjXRHNsJ_RaygNEb_mnAHaEK&pid=Api&P=0&h=180',
      liked: false,
    },
    {
      id: 7,
      name: 'Sản phẩm 7',
      author: 'Tác giả G',
      price: '$45',
      imageUrl: 'link_to_image_7.jpg',
      liked: false,
    },
    {
      id: 8,
      name: 'Sản phẩm 8',
      author: 'Tác giả H',
      price: '$55',
      imageUrl: 'link_to_image_8.jpg',
      liked: false,
    },
    {
      id: 9,
      name: 'Sản phẩm 9',
      author: 'Tác giả I',
      price: '$30',
      imageUrl: 'link_to_image_9.jpg',
      liked: false,
    },
    {
      id: 10,
      name: 'Sản phẩm 10',
      author: 'Tác giả J',
      price: '$70',
      imageUrl: 'link_to_image_10.jpg',
      liked: false,
    },
  ]);
  const [savedProducts, setSavedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 6;
  const pageCount = Math.ceil(products.length / productsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastProduct = (currentPage + 1) * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleLikeToggle = (id) => {
    const likedProduct = products.find(product => product.id === id);

    if (!savedProducts.find(product => product.id === id)) {
      setSavedProducts(prevSavedProducts => [...prevSavedProducts, likedProduct]);
    }

    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, liked: !product.liked } : product
      )
    );

    console.log("Liked Products on HomePage: ", savedProducts);
  };
  

  return (
    <div className="product-page">
    <h1>Collect art and design online</h1>
    <div className="product-list">
      {currentProducts.map((product) => (
        <div key={product.id} className="product-itemm">
          <div className="product-card">
            <div className="product-images">
              <img src={product.imageUrl} alt={product.name} className="product-imagee" />
            </div>
            <div className="product-content">
            <p>Tác giả: {product.author}</p>
              <h3 className="product-title">{product.name}</h3>
              
              <p>Giá: {product.price}</p>
              <div className="button-heart"> 
              <button onClick={() => handleLikeToggle(product.id)} className={product.liked ? 'liked' : ''}>
                    {product.liked ? <FaHeart /> : <FaRegHeart />}
                  </button>
</div>

             
            </div>
          </div>
        </div>
      ))}
    </div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    
    </div>
  );
};

export default HomePage;