/* eslint-disable react/prop-types */
const Pagination = ({ productPerPage, totalProduct, paginate, activePage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="default-pagination lab-ul">
      <li>
        <a
          href="#"
          onClick={() => {
            if (activePage > 1) paginate(activePage - 1);
          }}
        >
          <i className="icofont-rounded-left"></i>
        </a>
      </li>
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`page-item ${activePage === number ? 'bg-warning' : ''}`}
        >
          <button onClick={() => paginate(number)} className="bg-transparent">
            {number}
          </button>
        </li>
      ))}
      <li>
        <a
          href="#"
          onClick={() => {
            if (activePage < pageNumbers.length) paginate(activePage + 1);
          }}
        >
          <i className="icofont-rounded-right"></i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
