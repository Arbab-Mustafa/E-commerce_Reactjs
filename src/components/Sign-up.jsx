/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const title = 'Register';
const socialTitle = 'Login With Social Media';
const btn = 'Signup ';
const SignUp = () => {
  const [errorMessages, setErrorMessages] = useState('');
  const { signInWithGMail, createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const handleRegister = () => {
    signInWithGMail()
      .then((result) => {
        const user = result.user;

        alert('login success');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessages = error.message;
        setErrorMessages(
          `Please provide valid email & Password ${errorMessages}`
        );
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    //
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(email, password, confirmPassword);
    if (password != confirmPassword) {
      setErrorMessages('Password not matched! Please Provide valid password');
    } else {
      setErrorMessages('');
      createUser(email, password)
        .then((useCredentials) => {
          const user = useCredentials.user;
          alert('user created successfully');
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
          alert(`${error.message}`);
        });
    }
  };
  return (
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form className="account-form" onSubmit={handleSignUp}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your Name..."
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your E-mail..."
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password Here.."
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Enter confirmedPassword Here.."
                required="required"
              />
            </div>
            <div>
              {errorMessages && (
                <div className="error-message text-danger mb-1">
                  {errorMessages}
                </div>
              )}
            </div>
            <div className="form-group">
              <div className="d-flex justify-content-between  flex-wrap pt-sm-2">
                <Link to="/forget-password" className="forget-link">
                  Forget Password?
                </Link>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="d-block lab-btn">
                <span>{btn}</span>
              </button>
            </div>
          </form>
          {/*  */}
          <div className="account-bottom">
            <span className="d-block cate pt-10">
              Have an Account? <Link to="/login">Login</Link>{' '}
            </span>
            <span className="or">
              <span>or</span>
            </span>
            <h5 className="subtitle">{socialTitle}</h5>
            <ul className="lab-ul social-icons justify-content-center">
              <li>
                <button className="github" onClick={handleRegister}>
                  <i className="icofont-github"></i>
                </button>
              </li>
              <li>
                <a href="/" className="facebook">
                  {' '}
                  <i className="icofont-facebook"></i>
                </a>{' '}
              </li>
              <li>
                <a href="/" className="twitter">
                  {' '}
                  <i className="icofont-twitter"></i>
                </a>{' '}
              </li>
              <li>
                <a href="/" className="linkedin">
                  {' '}
                  <i className="icofont-facebook"></i>
                </a>{' '}
              </li>
              <li>
                <a href="/" className="instagram">
                  {' '}
                  <i className="icofont-instagram"></i>
                </a>{' '}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
