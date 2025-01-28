"use client";

import { useState } from "react";

export function usePagination<T>(
  list: T[],
  itemsPerPage: number,
  pageDefault = 1
) {
  const [page, setPage] = useState(pageDefault);
  const pages = Math.ceil(list.length / itemsPerPage);

  function getPaginatedList(): T[] {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return list.slice(startIndex, endIndex);
  }

  return { page, setPage, pages, getPaginatedList };
}
