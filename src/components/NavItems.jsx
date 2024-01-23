import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';
import { AuthContext } from '../context/AuthProvider';

export const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerfixed, setHeaderfixed] = useState(false);

  const { user, login } = useContext(AuthContext);
  console.log(user);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setHeaderfixed(true);
    } else {
      setHeaderfixed(false);
    }
  });

  return (
    <header
      className={`header-section style-4 ${headerfixed ? 'header-fixed' : ''}`}
    >
      <div className={`header-top  d-md-none  ${socialToggle ? 'open ' : ''}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/sign-up" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="/login"> {login ? 'Logout' : 'Login'}</Link>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-dearch-acte">
              <div className="logo">
                <Link to={'/'}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            {/*  */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? 'active' : ''}`}>
                  <li>
                    {' '}
                    <Link to="/"> Home</Link>
                  </li>
                  <li>
                    {' '}
                    <Link to="/shop"> Shop</Link>
                  </li>
                  <li>
                    {' '}
                    <Link to="/blog"> Blog</Link>
                  </li>
                  <li>
                    {' '}
                    <Link to="/about"> About</Link>
                  </li>
                  <li>
                    {' '}
                    <Link to="/contact"> Contact</Link>
                  </li>
                </ul>
                {/*  */}
              </div>
              <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">
                Create Accpunt
              </Link>
              <Link to="/login" className=" d-none d-md-block">
                {login ? 'Logout' : 'Login'}
              </Link>
              {/*  */}
              <div
                className={`header-bar d-lg-none ${menuToggle ? 'active' : ''}`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              {/*  */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
