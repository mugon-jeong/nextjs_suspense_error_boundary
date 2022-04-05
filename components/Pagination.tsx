import { Dispatch, SetStateAction } from "react";

export interface Pagination {
  activePage: number;
  pages: number;
  setActivePage: Dispatch<SetStateAction<number>>;
}
const Pagination = ({ activePage, pages, setActivePage }: Pagination) => {
  const getPages = () => {
    const elements = [];
    for (let i = 1; i <= pages; i++) {
      elements.push(
        <button
          className={`${activePage === i ? "active" : ""}`}
          onClick={() => setActivePage(i)}
          key={i}
        >
          {i < 10 ? `0${i}` : i}
        </button>
      );
    }
    return elements; // [<div>1</div>, <div>2</div>....]
  };
  return (
    <div className="pagination">
      <button
        // Previous page (<) inactive if current page is 1
        className={`pagination-arrow ${activePage === 1 ? "inactive" : ""}`}
        onClick={() => activePage !== 1 && setActivePage((page) => page - 1)}
      >
        {"<"}
      </button>
      {getPages()}
      <button
        // Next Page (>) inactive if the current page is the last page.
        className={`pagination-arrow ${activePage === pages ? "inactive" : ""}`}
        onClick={() =>
          activePage !== pages && setActivePage((page) => page + 1)
        }
      >
        {">"}{" "}
      </button>
    </div>
  );
};

export default Pagination;
