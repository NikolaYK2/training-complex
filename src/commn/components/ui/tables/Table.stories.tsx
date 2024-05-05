import type {StoryObj} from '@storybook/react'
import {Table} from "@/commn/components/ui/tables/Table.tsx";
import img from "@/assets/image/table/img.png";
import {IconSvg} from "@/commn/components/ui/iconSvg/IconSvg.tsx";
import {Rating} from "@/commn/components/ui/rating/Rating.tsx";

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table',
}

export default meta
type Story = StoryObj


export const TableError: Story = {
  render: () => <Table
    headers={[
      {id: 1, title: 'name'},
      {id: 2, title: 'name', sort: true},
      {id: 3, title: 'name'},
      {id: 3, title: 'name'}
    ]}
    paragraphs={[[
      {id: 1, title: 'row', img: img},
      {id: 2, title: 'row'},
      {
        id: 3, title: '', element: [
          <IconSvg name={"play"}/>,
          <IconSvg name={"edit"}/>,
          <IconSvg name={"delete"}/>,
        ]
      },
    ]]}
  />
}
export const TableOne: Story = {
  args: {
    headers: [
      {id: 1, title: 'name'},
    ],
    paragraphs: [[
      {id: 1, title: 'row', img: img},
    ]]

  }
}

export const TableFull: Story = {
  args: {
    headers: [
      {id: 1, title: 'name'},
      {id: 2, title: 'name', sort: true},
      {id: 3, title: 'name'},
      {id: 4, title: 'name'},
      {id: 5, title: 'name'}
    ],
    paragraphs: [[
      {id: 1, title: 'row', img: img},
      {id: 2, title: 'row'},
      {id: 3, title: 'row'},
      {id: 4, element: [<Rating stars={5} ratingValue={3} hoveredStarValue={5}/>]},
      {
        id: 5, title: '', element: [
          <IconSvg name={"play"}/>,
          <IconSvg name={"edit"}/>,
          <IconSvg name={"delete"}/>,
        ]
      },

    ]]
  }
}


