import React, { Component } from "react";
import { ThemeContext } from "./Header/theme-context";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const range = (from, to, step = 1) => {
  const range = [];

  for (let i = from; i <= to; i = i + step) {
    range.push(i);
  }
  return range;
};

class Pagination extends Component {
  state = { currentPage: 1 };

  totalPages = Math.ceil(this.props.totalRecords / this.props.pageLimit);

  fetchPageNumbers = () => {
    const totalPages = this.totalPages;
    const currentPage = this.state.currentPage;
    const pageNeighbours = this.props.pageNeighbours;

    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */

    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

      let pages = range(startPage, endPage);
      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      // handle: (1) < {5 6} [7] {8 9} (10)
      if (hasLeftSpill && !hasRightSpill) {
        const extraPages = range(startPage - spillOffset, startPage - 1);
        pages = [LEFT_PAGE, ...extraPages, ...pages];
        // handle: (1) {2 3} [4] {5 6} > (10)
      } else if (!hasLeftSpill && hasRightSpill) {
        const extraPages = range(endPage + 1, endPage + spillOffset);
        pages = [...pages, ...extraPages, RIGHT_PAGE];
        // handle: (1) < {4 5} [6] {7 8} > (10)
      } else if (hasLeftSpill && hasRightSpill) {
        pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  componentDidMount() {
    this.gotoPage(1);
  }

  gotoPage = page => {
    // const { onPageChanged = f => f } = this.props;

    const currentPage = Math.max(0, Math.min(page, this.totalPages));

    // const paginationData = {
    //   currentPage,
    //   totalPages: this.totalPages,
    //   pageLimit: this.props.pageLimit,
    //   totalRecords: this.props.totalRecords
    // };
    this.setState({ currentPage });
  };

  handleClick = page => e => {
    e.preventDefault();
    this.gotoPage(page);
  };

  handleMoveLeft = e => {
    e.preventDefault();
    this.gotoPage(this.state.currentPage - this.props.pageNeighbours * 2 - 1);
  };

  handleMoveRight = e => {
    e.preventDefault();
    this.gotoPage(this.state.currentPage + this.props.pageNeighbours * 2 + 1);
  };

  render() {
    // don't render if no totalRecords prop or just 1 page
    if (!this.props.totalRecords || this.totalPages === 1) return null;

    const { currentPage } = this.state;
    const pages = this.fetchPageNumbers();

    return (
      <ul className="pagination">
        {pages.map((page, i) => {
          if (page === LEFT_PAGE)
            return (
              <li className="page-item-nav" key={i}>
                <button
                  className="btn"
                  aria-label="Previous"
                  onClick={this.handleMoveLeft}
                >
                  <span aria-hidden="true">&laquo; </span>
                  <span>Previous</span>
                </button>
              </li>
            );
          if (page === RIGHT_PAGE)
            return (
              <li className="page-item-nav" key={i}>
                <button
                  className="btn"
                  aria-label="Next"
                  onClick={this.handleMoveRight}
                >
                  <span aria-hidden="true">&raquo; </span>
                  <span>Next</span>
                </button>
              </li>
            );
          return (
            <ThemeContext.Consumer key={i}>
              {({ theme }) => (
                <li
                  className={`page-item${
                    currentPage === page ? " active" : ""
                  }`}
                >
                  <button
                    className={`btn${currentPage === page ? ` ${theme}` : ""}`}
                    onClick={this.handleClick(page)}
                  >
                    {page}
                  </button>
                </li>
              )}
            </ThemeContext.Consumer>
          );
        })}
      </ul>
    );
  }
}

export default Pagination;
