import {Radio} from "@/commn/components/ui/radioGroup/Radio.tsx";

export function App() {


  return <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: '400px'}}>
    <Radio id={'r1'} value={'Default'} disabled={false}/>
  </div>
}
