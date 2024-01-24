import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ProductDisplay from "./ProductDisplay";
import Review from "./Review";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

const SingleProduct = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json"); // Assuming the file is in the public folder
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(products);
  const product = products.filter((product) => product.id === id);
  // console.log(product);
  return (
    <div>
      <PageHeader title={"Our Shop Product"} curPage={"Product Details"} />

      <div className="shop-single paddig-tb  aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        <div className="swiper-container pro-single-top">
                          <Swiper
                            className="mySwiper"
                            SwiperView={1}
                            spaceBetween={30}
                            loop={"true"}
                            autoplay={{
                              delay: 2000,
                              disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            navigation={{
                              prevEl: ".pro-single-prev",
                              nextEl: ".pro-single-next",
                            }}
                          >
                            {product.map((product, i) => (
                              <SwiperSlide key={i}>
                                <div className="single-thumb">
                                  <img src={product.img} alt={product.name} />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                          <div className="pro-single-next">
                            <i className="icofont-rounded-left"></i>
                          </div>
                          <div className="pro-single-prev">
                            <i className="icofont-rounded-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        <div>
                          {product.map((product) => (
                            <ProductDisplay
                              key={product.id}
                              product={product}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="review">
                  <Review />
                </div>
              </article>
            </div>
            {/*  */}
            <div className="col-lg-4 clo-12">
              <aside className="ps-lg-4">
                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
