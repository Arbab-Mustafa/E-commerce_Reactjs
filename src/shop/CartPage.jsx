import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

import delImgUrl from "/images/shop/del.png";

import CheckoutPage from "./CheckoutPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedItems);
  }, []);

  const calculateTotal = (items) => {
    return items.price * items.quantity;
  };

  const handleIncrease = (items) => {
    items.quantity = items.quantity + 1;
    setCartItems([...cartItems]);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  const handleDecrease = (items) => {
    if (items.quantity > 1) {
      items.quantity = items.quantity - 1;
      setCartItems([...cartItems]);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  const handleRemove = (items) => {
    const newCart = cartItems.filter((item) => item.id !== items.id);
    setCartItems(newCart);
    updateLocalStorage(newCart);
  };
  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotal(item);
  }, 0);

  const orderTotal = cartSubtotal;
  return (
    <div>
      <PageHeader title="Our Shop Cart" curPage={"Cart Page"} />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cart-product">Product</th>
                    <th className="cart-price">Price</th>
                    <th className="cart-quantity">Quantity</th>
                    <th className="cart-toprice">Total</th>
                    <th className="cart-edit">Edit</th>
                  </tr>
                </thead>
                {/*  */}
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className=" product-item cart-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to={`/shop`}>{item.name}</Link>
                        </div>
                      </td>
                      <td className="cat-price">${item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            className="cart-plus-minus-box"
                            type="text"
                            name="qtybutton"
                            value={item.quantity}
                            readOnly
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">${calculateTotal(item)}</td>
                      <td className="cat-edit">
                        <a
                          href="#"
                          className="cart-remove"
                          onClick={() => handleRemove(item)}
                        >
                          <img src={delImgUrl} alt="delete-icon" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/*  */}
            {/*  */}
            <div className="cart-bottom">
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    name="coupon"
                    id="coupon"
                    className="cart-page-input-text"
                  />
                  <input type="submit" value="Apply Coupon" />
                </form>
                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div>
                    <CheckoutPage />
                  </div>
                </form>
              </div>
              {/*  */}
              <div className="shiping-box ">
                <div className="row ">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shiping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="pak">Pakistan</option>
                          <option value="ind">India</option>
                          <option value="uae">UAE</option>
                          <option value="china">China</option>
                          <option value="usa">USA</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      {/*  */}
                      <div className="outline-select shipping-select">
                        <select>
                          <option value="pak">Islamabad</option>
                          <option value="ind">Dehli</option>
                          <option value="uae">Dubia</option>
                          <option value="china">Benjing</option>
                          <option value="usa">New Yark</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="postalcode"
                        id="postalCode"
                        className="cart-page-input-text"
                        placeholder="Postal Code/Zip Code"
                      />
                      <button type="submit" className="cart-page-btn">
                        Update Details
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <span className="pull-right">{cartSubtotal}</span>
                        </li>
                        <li>
                          <span className="pull-left">Shipping & handling</span>
                          <span className="pull-right">Free Shipping</span>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <span className="pull-right">
                            {orderTotal.toFixed(2)}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
