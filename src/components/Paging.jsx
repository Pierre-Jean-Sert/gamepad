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
    // Return
  }

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
      {pageNumber}
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
