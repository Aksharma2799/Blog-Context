import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className="flex flex-row gap-10 relative text-red-600 bottom-3">
      <div className="flex flex-row gap-3" >
        {page > 1 && (
          <button onClick={() => handlePageChange(page - 1)}>Previous</button>
        )}
        {page < totalPages && (
          <button onClick={() => handlePageChange(page + 1)}>Next</button>
        )}
      </div>
      <p>
        Page {page} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
