import { Link } from 'react-router-dom';

const postList = [
  {
    id: 1,
    imgUrl: '/images/blog/10.jpg',
    imgAlt: 'rajibraj91',
    title: 'Poor People Campaign Our Resources',
    date: 'Jun 05,2023',
  },
  {
    id: 2,
    imgUrl: '/images/blog/11.jpg',
    imgAlt: 'rajibraj91',
    title: 'Poor Peoples Campaign Our Resources',
    date: 'Sep 05,2023',
  },
  {
    id: 3,
    imgUrl: '/images/blog/12.jpg',
    imgAlt: 'rajibraj91',
    title: 'Poor Peoples Campaign Our Resources',
    date: 'Aug 05,2023',
  },
  {
    id: 4,
    imgUrl: '/images/blog/09.jpg',
    imgAlt: 'rajibraj91',
    title: 'Poor Peoples Campaign Our Resources',
    date: 'July 05,2023',
  },
];
const title = 'Popular Post';
const PopularPost = () => {
  return (
    <div className="widget widget-post">
      <div className="widget-header">
        <h5 className="title">{title}</h5>
      </div>
      <ul className="widget-wrapper">
        {postList.map((item, i) => (
          <li key={i} className="d-flex flex-wrap justify-content-between">
            <div className="post-thumb">
              <Link to={`/blog/${item.id}`}>
                <img src={item.imgUrl} alt={item.title} />
              </Link>
            </div>
            <div className="post-content">
              <Link to={`/blog/${item.id}`}>
                <h5>{item.title}</h5>
              </Link>

              <p>{item.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPost;
