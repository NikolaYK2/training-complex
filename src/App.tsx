import {ArrType, DropDownMenu} from "@/commn/components/ui/dropDownMenu/DropDownMenu.tsx";

export function App() {
  const prof = {
    id: 1,
    name: 'icon',
    arr: [
      {icon: 'avatar', name: 'Nikolaj', email: 'Kev'},
      {icon: 'profile', name: 'My Profile'},
      {icon: 'logOut', name: 'Sing Out'},
    ] as ArrType[]
  }
  const card = {
    id: 1,
    name: 'icon',
    arr: [
      {icon: 'learn', name: 'Learn'},
      {icon: 'edit', name: 'Edit'},
      {icon: 'delete', name: 'Delete'},
    ] as ArrType[]
  }


  return <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: '400px'}}>
    <DropDownMenu obj={prof}/>
  </div>
}
