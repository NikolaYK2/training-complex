import {Meta, StoryObj} from "@storybook/react";
import {Pagination} from "@/commn/components/ui/pagination/Pagination.tsx";

const meta = {
  argTypes: {
    currentPage:{num:1},
    siblingCount:{numa:1},
    pageSize:{num:10},
    totalCount:{num:70},
  },
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const pag: Story = {
  args: {
    currentPage: 1,
    pageSize: 10,
    siblingCount: 1,
    totalCount: 70,
    onPageChange:()=>{},
    setPageSize:()=>{}
  },
}