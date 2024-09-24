import React, { FC } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex justify-center mt-6 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-neutral-medium text-neutral-light rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span className="px-4 py-2 bg-neutral-medium text-neutral-light rounded">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-neutral-medium text-neutral-light rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
