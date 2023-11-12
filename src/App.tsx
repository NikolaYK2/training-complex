import {Pagination} from "@/commn/components/ui/pagination/Pagination.tsx";
import {useState} from "react";

export function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)

  return <div>
    <Pagination
      pageSizeOptions={[
        {id: 10, value: 10,},
        {id: 20, value: 20,},
        {id: 30, value: 30,},
        {id: 50, value: 50,},
        {id: 100, value: 100,},
      ]}
      currentPage={currentPage}
      pageSize={pageSize}
      onPageChange={setCurrentPage}
      setPageSize={setPageSize}
      totalCount={70}
      siblingCount={1}/>
  </div>
}
