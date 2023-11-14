import {DropDownMenu} from "@/commn/components/ui/dropDownMenu/DropDownMenu.tsx";

export function App() {
const prof= {id:1, name:'icon',nameProfile:'Nikolaj', email:'Kev@', profile:'My Profile', logOut:'Sing Out'}
const card= {
  id:1,
  name:'icon',
  learn: 'learn',
  edit: 'Edit',
  delete: 'delete'
}


  return <div style={{display:"flex", justifyContent: "center", alignItems:"center", height:'400px'}}>
    <DropDownMenu obj={prof}/>
  </div>
}
