"use client";
// import * as React from "react";
import { Pagination as PaginationNextUI } from "@nextui-org/react";
import { useState } from "react";

type Pagination = {
  currentPage: number;
  total: number;
  onChange: any;
};

export default function Pagination({
  currentPage,
  total,
  onChange,
}: Pagination) {
  const [page, setPage] = useState(currentPage);
  const handleChange = (value: number) => {
    setPage(value);
    onChange(value);
  };

  return (
    <div className="flex justify-center w-full z-40">
      <PaginationNextUI
        showControls
        total={total}
        initialPage={page}
        onChange={handleChange}
        color="danger"
        size="lg"
      />
    </div>
  );
}
