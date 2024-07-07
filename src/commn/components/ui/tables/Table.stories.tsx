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
        { id: 2, title: 'name' },
        { id: 3, title: 'name' },
        { id: 4, title: 'name' },
      ]}
      paragraphs={[
        {
          cells: [
            { img: img, value: 'row' },
            { value: 'row' },
            {
              element: [
                <IconSvg key={'1'} name={'play'} />,
                <IconSvg key={'2'} name={'edit'} />,
                <IconSvg key={'3'} name={'delete'} />,
              ],
              value: '',
            },
          ],
          idCells: '1',
        },
      ]}
    />
  ),
}
export const TableOne: Story = {
  args: {
    headers: [{ id: 1, title: 'name' }],
    paragraphs: [{ cells: [{ id: 1, img: img, title: 'row' }] }],
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
      {
        cells: [
          { img: img, value: 'row' },
          { value: 'row' },
          { value: 'row' },
          { element: [<Rating hoveredStarValue={5} key={'1'} ratingValue={3} stars={5} />], id: 4 },
          {
            element: [
              <IconSvg key={'1'} name={'play'} />,
              <IconSvg key={'2'} name={'edit'} />,
              <IconSvg key={'3'} name={'delete'} />,
            ],
            value: '',
          },
        ],
        idCells: '1',
      },
    ],
  },
}
