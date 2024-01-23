/* eslint-disable no-unused-vars */
import { useState } from 'react';
import blogList from '../utilis/blogdata';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Tags from '../shop/Tags';
import PopularPost from './../shop/PopularPost';
const socialList = [
  { link: '#', iconName: 'icofont-facebook', className: 'facebook' },
  { link: '#', iconName: 'icofont-twitter', className: 'twitter' },
  { link: '#', iconName: 'icofont-linkedin', className: 'linkedin' },
  { link: '#', iconName: 'icofont-instagram', className: 'instagram' },
  { link: '#', iconName: 'icofont-pinterest', className: 'pinterest' },
];
const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  const result = blog.filter((item) => item.id === Number(id));

  return (
    <div>
      <PageHeader title={'Blog  Page'} curPage={'Blog Details'} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt={item.imgAlt}
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((meta, i) => (
                                      <li key={i}>
                                        <i className={meta.iconName}></i>
                                        {meta.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  As an AI programming assistant, I can provide
                                  you with a paragraph for your blog list.
                                  However, I need more information about the
                                  topic or content of your blog list in order to
                                  generate a relevant paragraph. Please provide
                                  me with some details or keywords related to
                                  your blog list so that I can assist you
                                  better.
                                </p>
                                <blockquote>
                                  <p>{item.desc}</p>
                                  <cite>
                                    <a href="#">...Arbab Mustafa</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  {' '}
                                  As an AI programming assistant, I can provide
                                  you with a paragraph for your blog list.
                                  However, I need more information about the
                                  topic or content of your blog list in order to
                                  generate a relevant paragraph. Please provide
                                  me with some details or keywords related to
                                  your blog list so that I can assist you
                                  better.
                                </p>
                                <img src="/src/assets/images/blog/single/01.jpg" />
                                <p>
                                  {' '}
                                  As an AI programming assistant, I can provide
                                  you with a paragraph for your blog list.
                                  However, I need more information about the
                                  topic or content of your blog list in order to
                                  generate a relevant paragraph. Please provide
                                  me with some details or keywords related to
                                  your blog list so that I can assist you
                                  better.
                                </p>
                                <div className="video-thumb">
                                  <img src="/src/assets/images/blog/single/02.jpg" />
                                  <a href="#" className="video-button popup">
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  As an AI programming assistant, I can provide
                                  you with a paragraph for your blog list.
                                  However, I need more information about the
                                  topic or content of your blog list in order to
                                  generate a relevant paragraph. Please provide
                                  me with some details or keywords related to
                                  your blog list so that I can assist you
                                  better.
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Busniess</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((item, i) => (
                                      <li key={i}>
                                        <a href="#" className={item.className}>
                                          <i className={item.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="navigations-part">
                        <div className="left">
                          <a href="#" className="prev">
                            <i className="icofont-double-left"></i>
                            Previous Blog
                          </a>
                          <a href="#" className="title">
                            Parallel Process via Technia Sound Models
                          </a>
                        </div>
                        <div className="right">
                          <a href="#" className="prev">
                            Next Blog
                            <i className="icofont-double-right"></i>
                          </a>
                          <a href="#" className="title">
                            Parallel Process via Technia Sound Models
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            {/*  */}
            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
