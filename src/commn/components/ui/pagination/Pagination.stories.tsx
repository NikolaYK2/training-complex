import {Meta, StoryObj} from "@storybook/react";
import {Pagination} from "@/commn/components/ui/pagination/Pagination.tsx";
import {useState} from "react";

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
  decorators: [(Story) => <div style={{height: '200px'}}><Story/></div>]
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const PaginationStatic: Story = {
  args: {
    totalCount: 20,
    siblingCount: 1,
    pageSize: 10,
    currentPage: 2,
    setPageSize: () => {
    },
    onPageChange: () => {
    }
  }
}

export const PaginationControlled = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  return <Pagination
    totalCount={70}
    pageSize={pageSize}
    currentPage={currentPage}
    siblingCount={1}
    onPageChange={setCurrentPage}
    setPageSize={setPageSize}/>
}



