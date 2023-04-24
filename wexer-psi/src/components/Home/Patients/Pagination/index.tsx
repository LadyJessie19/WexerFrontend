function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map(number => (
        <li key={number} className={number === currentPage ? 'active' : null}>
          <a href="#" className='colorBlue' onClick={() => onPageChange(number)}>{number}</a>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
