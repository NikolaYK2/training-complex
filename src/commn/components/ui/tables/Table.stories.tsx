import type { StoryObj } from '@storybook/react'

import img from '@/assets/image/table/img.png'
import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { Rating } from '@/commn/components/ui/rating/Rating'
import { Table } from '@/commn/components/ui/tables/Table'

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table',
}

export default meta
type Story = StoryObj

export const TableError: Story = {
  render: () => (
    <Table
      headers={[
        { id: 1, title: 'name' },
        { id: 2, sort: true, title: 'name' },
        { id: 3, title: 'name' },
        { id: 3, title: 'name' },
      ]}
      paragraphs={[
        [
          { id: 1, img: img, title: 'row' },
          { id: 2, title: 'row' },
          {
            element: [
              <IconSvg name={'play'} />,
              <IconSvg name={'edit'} />,
              <IconSvg name={'delete'} />,
            ],
            id: 3,
            title: '',
          },
        ],
      ]}
    />
  ),
}
export const TableOne: Story = {
  args: {
    headers: [{ id: 1, title: 'name' }],
    paragraphs: [[{ id: 1, img: img, title: 'row' }]],
  },
}

export const TableFull: Story = {
  args: {
    headers: [
      { id: 1, title: 'name' },
      { id: 2, sort: true, title: 'name' },
      { id: 3, title: 'name' },
      { id: 4, title: 'name' },
      { id: 5, title: 'name' },
    ],
    paragraphs: [
      [
        { id: 1, img: img, title: 'row' },
        { id: 2, title: 'row' },
        { id: 3, title: 'row' },
        { element: [<Rating hoveredStarValue={5} ratingValue={3} stars={5} />], id: 4 },
        {
          element: [
            <IconSvg name={'play'} />,
            <IconSvg name={'edit'} />,
            <IconSvg name={'delete'} />,
          ],
          id: 5,
          title: '',
        },
      ],
    ],
  },
}
