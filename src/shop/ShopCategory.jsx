/* eslint-disable no-unused-vars */
import Data from "/public/products.json";

/* eslint-disable react/prop-types */

const ShopCategory = ({
  filterItems,
  setItem,
  menuItems,
  setProducts,
  selectedCategory,
}) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">All Catagoery</h5>
      </div>
      <div>
        <button
          className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}
          onClick={() => {
            setProducts(Data);
          }}
        >
          All
        </button>
        {menuItems.map((val, id) => {
          return (
            <button
              key={id}
              className={`m-2 ${selectedCategory === val ? "bg-warning" : ""}`}
              onClick={() => filterItems(val)}
            >
              {val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ShopCategory;
