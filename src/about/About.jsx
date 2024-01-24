import PageHeader from '../components/PageHeader';

const subTitle = 'About Our Brand';
const title = 'Good Qualification Services And Better Expriences';
const desc =
  'Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.';

const year = '3+';
const expareance = 'Years Of Experiences';

const aboutList = [
  {
    imgUrl: '/images/about/icon/01.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Skilled Instructors',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
  },
  {
    imgUrl: '/images/about/icon/02.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Get Certificate',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
  },
  {
    imgUrl: '/images/about/icon/03.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Online Classes',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
  },
];

const About = () => {
  return (
    <div>
      <PageHeader title={'About Our Brand'} curPage={'About'} />
      <div className="about-section  style-3 padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
            <div className="col">
              <div className="about-left">
                <div className="about-thumb">
                  <img src="/images/about/01.jpg" alt="about thumb" />
                </div>
                <div className="abs-thumb">
                  <img src="/images/about/02.jpg" alt="about thumb" />
                </div>
                <div className="about-left-content">
                  <h3>{year}</h3>
                  <p>{expareance}</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col">
              <div className="about-right">
                <div className="section-header">
                  <span className="subtitle">{subTitle}</span>
                  <h2 className="title">{title}</h2>
                  <p>{desc}</p>
                </div>
                <div className="section-wrapper">
                  <ul className="lab-ul">
                    {aboutList.map((item, index) => (
                      <li key={index}>
                        <div className="sr-left">
                          <img src={item.imgUrl} alt={item.imgAlt} />
                        </div>
                        <div className="sr-right">
                          <h6>{item.title}</h6>
                          <p>{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
