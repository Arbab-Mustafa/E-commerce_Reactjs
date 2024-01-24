import GoogleMap from '../components/GoogleMap';
import PageHeader from '../components/PageHeader';
const subTitle = 'Get in touch with us';
const title = "We're Always Eager To Hear From You!";
const conSubTitle = 'Get in touch with Contact us';
const conTitle =
  'Fill The Form Below So We Can Get To Know You And Your Needs Better.';
const btnText = 'Send our Message';

const contactList = [
  {
    imgUrl: '/images/icon/01.png',
    imgAlt: 'contact icon',
    title: 'Office Address',
    desc: 'UET, Taxila, Pakistan',
  },
  {
    imgUrl: '/images/icon/02.png',
    imgAlt: 'contact icon',
    title: 'Phone number',
    desc: '+92 123 456 7890',
  },
  {
    imgUrl: '/images/icon/03.png',
    imgAlt: 'contact icon',
    title: 'Send email',
    desc: 'arbabtest@32.com',
  },
  {
    imgUrl: '/images/icon/04.png',
    imgAlt: 'contact icon',
    title: 'Our website',
    desc: 'www.arbabmustafa.com',
  },
];

const ContactPage = () => {
  return (
    <div>
      <PageHeader title="Get In Touch With Us" curPage="Contact Us" />
      <div className="map=address-section padding-tb section-bg">
        <div className="container">
          <div className="text-center section-header">
            <span className="subtitle">{subTitle}</span>
            <h2 className="title">{title}</h2>
          </div>
          <div className="section-wrapper">
            <div className="row flex-row-reverse">
              <div className="col-xl-4 col-lg-5 col-12">
                <div className="contact-wrapper">
                  {contactList.map((item, i) => (
                    <div className="contact-item" key={i}>
                      <div className="contact-thumb">
                        <img src={item.imgUrl} alt={item.imgAlt} />
                      </div>
                      <div className="contact-content">
                        <h6 className="title">{item.title}</h6>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/*  */}
              <div className="col-xl-8 col-lg-7 col-12">
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="contact-section padding-tb">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{conSubTitle}</span>
            <h2 className="title">{conTitle}</h2>
          </div>
          <div className="section-wrapper">
            <form action="" className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name.."
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email..."
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Your Number Number..."
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Your Subject..."
                />
              </div>
              <div className="form-group w-100">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message..."
                  rows="8"
                />
              </div>
              <div className="form-group w-100 text-center">
                <button className="lab-btn" type="submit">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
