const subTitle = 'Save the Day';
const title = (
  <h2 className="title">
    Join on the Day Long Free Workshop for
    <b>
      Advance
      <span>Mastering</span>
    </b>
    on sales
  </h2>
);
const desc = 'Limitted Time Offer! Hurry Up';

const Register = () => {
  return (
    <section className="register-section padding-tb pb-0">
      <div className="container">
        <div className="row g-4  row-cols-lg-2 row-cols-1 align-items-center">
          <div className="col">
            <div className="section-header">
              <span className="subtitle">{subTitle}</span>
              {title}
              <p>{desc}</p>
            </div>
          </div>
          <div className="col">
            <div className="section-wrapper">
              <h4>Register Now</h4>
              <form className="register-form">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="res-input"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="res-input"
                />
                <input
                  type="number"
                  placeholder="Your Number"
                  name="number"
                  className="res-input"
                />
                <button type="submit" className="lab-btn">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
