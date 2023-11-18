import {Select} from "@/commn/components/ui/select/Select.tsx";

export function App() {


  return <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: '400px'}}>
    <Select options={[
      {id: 1, value: 'Select-box'},
      {id: 2, value: 'hi maloy'},
      {id: 3, value: 'Sam maloy'}]}/>
  </div>
}
