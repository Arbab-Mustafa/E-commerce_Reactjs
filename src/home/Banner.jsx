/* eslint-disable no-unused-vars */
import { useState } from 'react';
import productData from '../products.json';
import { Link } from 'react-router-dom';
import SelectedCatagory from '../components/SelectedCatagory';
const title = (
  <h2>
    Search Your One From <span>Thousand</span> of Product
  </h2>
);
const desc = 'We have a large number of products';
const bannerList = [
  { iconName: 'icofont-users-alt-4', text: '1.5 Million Customers' },
  { iconName: 'icofont-notification', text: 'More then 2000 Marchent' },
  { iconName: 'icofont-globe', text: 'Buy Anything Online' },
];
const Banner = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const handleSearch = (e) => {
    const SearchTerm = e.target.value;
    setSearchInput(SearchTerm);
    const filtered = filteredProducts.filter((product) =>
      product.name.toLocaleLowerCase().includes(SearchTerm.toLocaleLowerCase())
    );
    setFilteredProducts(filtered);
  };
  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCatagory select={'all'} />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Your Product"
              value={searchInput}
              onChange={handleSearch}
            />
            <button type="submit">
              <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, i) => (
                <li key={i}>
                  {' '}
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>{' '}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
