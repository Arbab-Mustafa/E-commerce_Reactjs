import { useState } from 'react';
import Ratting from '../components/Ratting';

let ReviewList = [
  {
    imgUrl: '/src/assets/images/instructor/01.jpg',
    imgAlt: 'Client thumb',
    name: 'Ganelon Boileau',
    date: 'Posted on Jun 10, 2023 at 6:57 am',
    desc: 'Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.',
  },
  {
    imgUrl: '/src/assets/images/instructor/02.jpg',
    imgAlt: 'Client thumb',
    name: 'Morgana Cailot',
    date: 'Posted on May 10, 2023 at 6:57 am',
    desc: 'Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.',
  },
  {
    imgUrl: '/src/assets/images/instructor/03.jpg',
    imgAlt: 'Client thumb',
    name: 'Telford Bois',
    date: 'Posted on Jan 04, 2024 at 6:57 am',
    desc: 'Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.',
  },
  {
    imgUrl: '/src/assets/images/instructor/04.jpg',
    imgAlt: 'Client thumb',
    name: 'Cher Daviau',
    date: 'Posted on Jun 01, 2024 at 6:57 am',
    desc: 'Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.',
  },
];

const Review = () => {
  const [review, setReview] = useState(true);
  return (
    <>
      <ul
        className={`review-nav lab-ul ${review ? 'RevActive' : 'DescActive'}`}
      >
        <li className="desc" onClick={() => setReview(!review)}>
          Description
        </li>
        <li className="rev" onClick={() => setReview(!review)}>
          Reviews
        </li>
      </ul>
      <div
        className={`review-content ${
          review ? 'review-content-show' : 'description-show'
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={review.imgUrl} alt={review.imgAlt} />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{review.name}</a>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="entry-content">
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/*  */}
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>Add a Review</h5>
              </div>
              <form action="action" className="row">
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    placeholder="Enter name here"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    type="email"
                    placeholder="Email here"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="me-2">Your Rating</span>
                    <Ratting />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea
                    name="message"
                    id="message"
                    rows="8"
                    placeholder="Type message here"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="default-button">
                    <span>Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            quod id recusandae possimus dolores explicabo, repellendus pariatur
            perferendis beatae quibusdam! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Rerum, ipsum! <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, quasi!{' '}
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            quod id recusandae possimus dolores explicabo, repellendus pariatur
            perferendis beatae quibusdam! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Rerum, ipsum! <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, quasi!
          </p>
          <div className="post-item">
            <div className="post-thumb">
              <img src="/src/assets/images/shop/01.jpg" alt="Blog" />
            </div>
            <div className="post-content">
              <ul className="lab-ul">
                <li>Pink Shirt</li>
                <li>Soft and comfortable fabric</li>
                <li>Stylish and trendy design</li>
                <li>Perfect fit for all body types</li>
                <li>Versatile and can be dressed up or down</li>
                <li>Eye-catching color that stands out</li>
                <li>Great for casual or formal occasions</li>
                <li>Easy to pair with different bottoms</li>
                <li>Durable and long-lasting</li>
                <li>Provides a feminine and elegant look</li>
                <li>Suitable for all seasons</li>
                <li>Can be worn with various accessories</li>
                <li>Adds a pop of color to any outfit</li>
                <li>Available in different shades of pink</li>
                <li>Offers a flattering silhouette</li>
              </ul>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem optio
            consequuntur, temporibus tenetur ut repudiandae commodi numquam
            illum ipsam natus.
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
