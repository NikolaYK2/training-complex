import {DialogModal} from "@/commn/components/ui/modals/dialog/DialogModal.tsx";
import {Select} from "@/commn/components/ui/select/Select.tsx";
import {Input} from "@/commn/components/ui/input/Input.tsx";
import {TickBox} from "@/commn/components/ui/checkBox/TickBox.tsx";

export function App() {


  return <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: '400px'}}>
    <DialogModal>
      {[
        <Select key={'Select1'} options={[
          {id: 1, value: 'Select-box'},
          {id: 2, value: 'hi maloy'},
          {id: 3, value: 'Sam maloy'}]}/>,
        <Input key={'Input1'} typeInput={'text'}/>,
        <Input key={'Input2'} typeInput={'text'}/>,
        <TickBox key={'TickBox1'} p={'Accept terms and conditions.'}/>
      ]}
    </DialogModal>
  </div>
}
