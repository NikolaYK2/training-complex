import {RadioGroupComponent} from "@/commn/components/ui/radioGroup/RadioGroupComponent.tsx";
import {Radio} from "@/commn/components/ui/radioGroup/Radio.tsx";

export function App() {


  return <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: '400px'}}>
    <RadioGroupComponent>
      <Radio id={'r1'} value={'Default'}/>
      <Radio id={'r2'} value={'RadioGroup'}/>
      <Radio id={'r3'} value={'PamParam'}/>
    </RadioGroupComponent>
  </div>
}
