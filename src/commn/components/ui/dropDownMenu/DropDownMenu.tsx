import { FC } from 'react'

import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './DropDownMenu.module.scss'

type MenuType = {
  arr: ArrType[]
  id: number
  name: string
}
export type ArrType = {
  buttonName: string
  email?: string
  icon: 'avatar' | 'delete' | 'edit' | 'learn' | 'logOut' | 'profile'
}
type Props = {
  obj: MenuType
}
// const card = {
//   id: 1,
//   name: 'icon',
//   arr: [
//     {icon: 'learn', name: 'Learn'},
//     {icon: 'edit', name: 'Edit'},
//     {icon: 'delete', name: 'Delete'},
//   ] as ArrType[]
// }

export const DropDownMenu: FC<Props> = ({ obj }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customise options'} className={'IconButton'}>
          {obj.name}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.content} sideOffset={5}>
          {obj.arr.map(el => (
            <DropdownMenu.Item className={s.item} key={el.icon}>
              <div className={el.email ? s.avatar : s.iconSlot}>
                <IconSvg name={el.icon} />
              </div>
              <div className={s.text}>
                <span>{el.buttonName}</span>
                <span>{el.email}</span>
              </div>
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Arrow className={s.menuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
// export const DropDownMenu: FC<Props> = ({obj}) => {
//
//   return (
//     <DropdownMenu.Root>
//       <DropdownMenu.Trigger asChild>
//         <button className="IconButton" aria-label="Customise options">
//           {obj.name}
//         </button>
//       </DropdownMenu.Trigger>
//
//       <DropdownMenu.Portal>
//         <DropdownMenu.Content className={s.content} sideOffset={5}>
//           <DropdownMenu.Item className={s.item}>
//             {obj.email ?
//               <div className={s.avatar}>
//                 <img src={ava} alt=""/>
//               </div> :
//               <div className={s.iconSlot}>
//                 <IconSvg name={'learn'}/>
//               </div>}
//             <div className={s.text}>
//               {(obj.nameProfile && obj.email) ? <><span>{obj.nameProfile}</span><span>{obj.email}</span> </> : obj.learn}
//             </div>
//           </DropdownMenu.Item>
//           <DropdownMenu.Item className={s.item}>
//             <div className={s.iconSlot}>
//               <IconSvg name={obj.profile ? 'profile' : 'edit'}/>
//             </div>
//             {obj.profile || obj.edit}
//           </DropdownMenu.Item>
//           <DropdownMenu.Item className={s.item}>
//             <div className={s.iconSlot}><IconSvg name={obj.logOut ? 'logOut' : 'delete'}/></div>
//             {obj.logOut || obj.delete}
//           </DropdownMenu.Item>
//           <DropdownMenu.Arrow className={s.menuArrow}/>
//         </DropdownMenu.Content>
//       </DropdownMenu.Portal>
//     </DropdownMenu.Root>
//   );
// };
