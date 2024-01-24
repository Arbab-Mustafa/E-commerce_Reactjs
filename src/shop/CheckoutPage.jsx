import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../components/modal.css';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const [show, setShow] = useState(false);
  const [activetab, setActiveTab] = useState('visa');
  const handleTab = (tabId) => {
    setActiveTab(tabId);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const handleOrderConfirm = () => {
    alert('Order Confirmed Successfully');
    localStorage.removeItem('cart');
    navigate(from, { replace: true });
    handleClose();
  };

  return (
    <div className="modalcard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Proceed to Checkout
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered
      >
        <div className="modal-dialog"></div>
        <h5 className="px-3 mb-3"> Select your Payment Method</h5>
        <div className="modal-content">
          <div className="modal-body">
            <div className="tabs mt-3">
              <ul className="nav nav-tabs" id="my-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    href="#visa"
                    id="visa-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="visa"
                    aria-selected={activetab === 'visa'}
                    onClick={() => handleTab('visa')}
                    className={`nav-link ${
                      activetab === 'visa' ? 'active' : ''
                    }`}
                  >
                    <img
                      src="https://i.imgur.com/sB4jftM.png"
                      alt="payment-pic-logo"
                      width="80"
                    />
                  </a>
                </li>
                {/*  */}
                <li className="nav-item" role="presentation">
                  <a
                    href="#paypal"
                    id="paypal-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="paypal"
                    aria-selected={activetab === 'paypal'}
                    onClick={() => handleTab('paypal')}
                    className={`nav-link ${
                      activetab === 'paypal' ? 'active' : ''
                    }`}
                  >
                    <img
                      src="https://i.imgur.com/yK7EDD1.png"
                      alt="payment-pic-logo"
                      width="80"
                    />
                  </a>
                </li>
              </ul>
              {/* 1 */}
              <div className="tab-content" id="myTabContent">
                {/*  */}
                <div
                  className={`tab-pane fade ${
                    activetab === 'visa' ? 'show active' : ''
                  }`}
                  id="visa"
                  role="tabpanal"
                  aria-labelledby="visa-tab"
                >
                  <div className="mt-4 mx-4">
                    <div className="text-center">
                      <h5>Credit Card</h5>
                    </div>
                    <div className="form mt-3">
                      <div className="inputbox">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          required
                        />
                        <span>Cardholder Name</span>
                      </div>
                      <div className="inputbox">
                        <input
                          type="text"
                          name="number"
                          id="number"
                          className="form-control"
                          required
                          min="1"
                          max="999"
                        />
                        <span>Card Number</span>
                        <i className="fa fa-eye"></i>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="number"
                            id="number"
                            className="form-control"
                            required
                            min="1"
                            max="999"
                          />
                          <span>Expiration Date</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="number"
                            id="number"
                            className="form-control"
                            required
                            min="1"
                            max="999"
                          />
                          <span>CVV</span>
                        </div>
                      </div>
                      <div className="pay px-5">
                        <button
                          type="submit"
                          className="btn btn-success btn-block"
                          onClick={handleOrderConfirm}
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div
                  className={`tab-pane fade ${
                    activetab === 'paypal' ? 'show active' : ''
                  }`}
                  id="paypal"
                  role="tabpanal"
                  aria-labelledby="paypal-tab"
                >
                  <div className="mt-4 mx-4">
                    <div className="text-center">
                      <h5>Paypal Account Info</h5>
                    </div>
                    <div className="form mt-3">
                      <div className="inputbox">
                        <input
                          type="email"
                          name="name"
                          id="name"
                          className="form-control"
                          required
                        />
                        <span>Enter your Email</span>
                      </div>
                      <div className="inputbox">
                        <input
                          type="text"
                          name="number"
                          id="number"
                          className="form-control"
                          required
                          min="1"
                          max="999"
                        />
                        <span>Your Name</span>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="numbber"
                            id="number"
                            min="1"
                            max="999"
                            className="form-control"
                            required
                          />
                          <span>Exta Info</span>
                        </div>
                      </div>

                      <div className="px-5 pay">
                        <button
                          type="submit"
                          className="btn btn-success btn-block"
                          onClick={handleOrderConfirm}
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-3 px-4 p-Disclaimer">
                <em>Payment Disclaimer:</em>
                In no event shall payment or partial payment by Owner for any
                material or services.
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
