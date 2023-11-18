import * as Dialog from '@radix-ui/react-dialog';
import {FC, ReactElement} from "react";
import s from './DialogModal.module.scss'
import {IconSvg} from "@/commn/components/ui/iconSvg/IconSvg.tsx";


type Props = {
  textH2?: string,
  textP?: string,
  children?: ReactElement[],
}
export const DialogModal: FC<Props> = ({textH2, textP, children}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>Value</button>
      </Dialog.Trigger>

      <Dialog.Portal>

        <Dialog.Overlay className={s.overlayBackground}/>
        <Dialog.Content className={s.content}>
          <Dialog.Title className={s.titleH2}>
            {textH2}
            <Dialog.Close asChild>
              {textH2 && <button className={s.buttonClose}><IconSvg name={"close"}/></button>}
            </Dialog.Close>
          </Dialog.Title>
          <Dialog.Description
            className={`${s.descriptionP} ${textH2 && textP && s.borderTop}`}>{textP}</Dialog.Description>
          {children?.map(child => (
            <fieldset key={child.key} className={s.fieldset}>
              <label>
                {child}
              </label>
            </fieldset>
          )) || !textH2 && !textP && <div className={s.background}></div>}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};


