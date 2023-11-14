import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {FC} from "react";
import {IconSvg} from "@/commn/components/ui/iconSvg/IconSvg.tsx";
import s from './DropDownMenu.module.scss'


type MenuType = {
  id: number,
  name: string,
  arr: ArrType[],
}
export type ArrType = {
  icon: 'learn' | 'edit' | 'delete' | 'profile' | 'logOut' | 'avatar',
  name: string,
  email?: string
}
type Props = {
  obj: MenuType,
}

export const DropDownMenu: FC<Props> = ({obj}) => {

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          {obj.name}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.content} sideOffset={5}>
          {obj.arr.map(el =>
            <DropdownMenu.Item className={s.item} key={el.icon}>
                <div className={el.email ? s.avatar : s.iconSlot}>
                  <IconSvg name={el.icon}/>
                </div>
              <div className={s.text}>
                <span>{el.name}</span>
                <span>{el.email}</span>
              </div>
            </DropdownMenu.Item>
          )}
          <DropdownMenu.Arrow className={s.menuArrow}/>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
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
