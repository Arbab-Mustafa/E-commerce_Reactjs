import { Link } from 'react-router-dom';

const btnText = 'Sign Up for Free';
const title = 'Buy Any thing,any time from anywhere';
const desc =
  'Take Shop on your any device, with our app and learn all the time what you want.ust Download and & install & start to learn';

const AppSection = () => {
  return (
    <div className="app-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <Link to="/sign-up" className="lab-btn mb-4">
            {btnText}
          </Link>
          <h2 className="title">{title}</h2>
          <p>{desc}</p>
        </div>
        <div className="section-wrapper">
          <ul className="lab-ul">
            <li>
              <a href="">
                <img
                  src="/src/assets/images/app/01.jpg"
                  alt="appStore-img-logo"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="/src/assets/images/app/02.jpg"
                  alt="appStore-img-logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
