/*

* GAMEPAD

* Paging Component

*/

//! Style import
import "../styles/paging.css";

//! Hooks import
import { useState } from "react";

//* PAGING FUNCTION
function Paging({
  data,
  pageNumber,
  setPageNumber,
  setUrl,
  setIsLoading,
  lastPageNumber,
}) {
  //

  // Paging calculator
  function pagingCalculator() {
    //
    const pageTab = [];
    //
    if (pageNumber <= 3 && lastPageNumber >= 6) {
      pageTab.push(
        1,
        2,
        3,
        "...",
        lastPageNumber - 2,
        lastPageNumber - 1,
        lastPageNumber
      );
      return pageTab;
      //
    } else if (pageNumber <= 3 && lastPageNumber < 6) {
      for (let i = 1; i <= lastPageNumber; i++) {
        pageTab.push(i);
      }
      return pageTab;
      //
    } else {
      pageTab.push(
        pageNumber - 3,
        pageNumber - 2,
        pageNumber - 1,
        "-",
        pageNumber,
        "-",
        lastPageNumber - 2,
        lastPageNumber - 1,
        lastPageNumber
      );
      return pageTab;
    }
  }

  // Paging and call paging calculator
  const pageTab = pagingCalculator();

  // Return
  return (
    <div className="paging">
      <i
        className="fa-solid fa-chevron-left"
        onClick={() => {
          if (data.previous) {
            setIsLoading(true);
            setUrl(data.previous);
            setPageNumber(pageNumber - 1);
          }
        }}
      ></i>

      {/* Paging calculator */}
      {pageTab.map((page) => {
        return (
          <p key={page} className={page === pageNumber ? "paging-page" : ""}>
            {page}
          </p>
        );
      })}

      <i
        className="fa-solid fa-chevron-right"
        onClick={() => {
          if (data.next) {
            setIsLoading(true);
            setUrl(data.next);
            setPageNumber(pageNumber + 1);
          }
        }}
      ></i>
    </div>
  );
}

export default Paging;
