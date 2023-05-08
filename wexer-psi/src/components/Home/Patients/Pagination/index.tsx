type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};

function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className={number === currentPage ? 'active' : undefined}>
          <a href="#" className="colorBlue" onClick={() => onPageChange(number)}>
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;

