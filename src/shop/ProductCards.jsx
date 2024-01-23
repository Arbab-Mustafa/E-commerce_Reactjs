import { Link } from 'react-router-dom';
import Ratting from '../components/Ratting';

/* eslint-disable react/prop-types */
const ProductCards = ({ GridList, products }) => {
  return (
    <div
      className={`shop-product-wrap row justify-content-center ${
        GridList ? 'grid' : 'list'
      }`}
    >
      {products.map((product, index) => (
        <div className="col-lg-4 col-md-6 col-12" key={index}>
          <div className="product-item">
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={product.img} alt={product.name}></img>
              </div>
              <div className="product-action-link">
                <Link to={`/shop/${product.id}`}>
                  {' '}
                  <i className="icofont-eye"></i>{' '}
                </Link>
                <a href="#">
                  <i className="icofont-heart"></i>
                </a>
                <Link to="/cart-page">
                  {' '}
                  <i className="icofont-cart-alt"></i>{' '}
                </Link>
              </div>
            </div>
            <div className="product-content">
              <h5>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </h5>
              <p className="productRating">
                <Ratting />
              </p>
              <h6>${product.price}</h6>
            </div>
          </div>
          <div className="product-list-item">
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={product.img} alt={product.name}></img>
              </div>
              <div className="product-action-link">
                <Link to={`/shop/${product.id}`}>
                  {' '}
                  <i className="icofont-eye"></i>{' '}
                </Link>
                <a href="#">
                  <i className="icofont-heart"></i>
                </a>
                <Link to="/cart-page">
                  {' '}
                  <i className="icofont-cart-alt"></i>{' '}
                </Link>
              </div>
            </div>
            <div className="product-content">
              <h5>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </h5>
              <p className="productRating">
                <Ratting />
              </p>
              <h6>${product.price}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
