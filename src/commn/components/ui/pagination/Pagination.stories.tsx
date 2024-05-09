import { useState } from 'react'

import { Pagination } from '@/commn/components/ui/pagination/Pagination'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Pagination,
  decorators: [
    Story => (
      <div style={{ height: '200px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const PaginationStatic: Story = {
  args: {
    currentPage: 2,
    onPageChange: () => {},
    pageSize: 10,
    setPageSize: () => {},
    siblingCount: 1,
    totalCount: 20,
  },
}

export const PaginationControlled = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      pageSize={pageSize}
      setPageSize={setPageSize}
      siblingCount={1}
      totalCount={70}
    />
  )
}
