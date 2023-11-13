import {Pagination} from "@/commn/components/ui/pagination/Pagination.tsx";
import {useState} from "react";

export function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  return <div>
    <Pagination
      currentPage={currentPage}
      pageSize={pageSize}
      onPageChange={setCurrentPage}
      setPageSize={setPageSize}
      totalCount={70}
      siblingCount={1}/>
  </div>
}
