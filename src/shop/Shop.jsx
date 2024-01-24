import { useState } from "react";
import PageHeader from "./../components/PageHeader";
const ShowResult = "Showing 01-12 of 139 Results";

import ProductCards from "./ProductCards";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";
import PopularPost from "./PopularPost";
import Tags from "./Tags";
import Data from "/public/products.json";

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);
  const [page, setPage] = useState(1);
  const productPerPage = 12;
  const indexOfLastProduct = page * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => setPage(pageNumber);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = [...new Set(Data.map((item) => item.category))];
  const filterItems = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setSelectedCategory(curcat);
    setProducts(newItem);
  };

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row jutify-content-center">
            <div className="col-lg-8 col-12  ">
              <article>
                <div className="shop-title d-flex flex-wrap  justify-content-between">
                  <p>{ShowResult}</p>
                  <div
                    className={`product-view-mode ${
                      GridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
                <div>
                  <ProductCards
                    GridList={GridList}
                    products={currentProducts}
                  />
                </div>
                <Pagination
                  productPerPage={productPerPage}
                  totalProduct={products.length}
                  paginate={paginate}
                  activePage={page}
                />
              </article>
            </div>
            {/*  */}
            <div className="col-lg-4 col-12  ">
              <aside>
                <Search products={products} GridList={GridList} />
                <ShopCategory
                  filterItems={filterItems}
                  setItem={setProducts}
                  menuItems={menuItems}
                  setProducts={setProducts}
                  selectedCategory={selectedCategory}
                />
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

export default Shop;
