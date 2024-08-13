import { extractTextParts } from '@/commn/components/ui/cardRemover/lib/extractTextParts'
import { DialogModal } from '@/commn/components/ui/modals/dialog/DialogModal'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { useDeleteAccountMutation } from '@/services/auth/authService'

import s from './DeleteAccount.module.scss'

type Props = {
  text: string
}
export const DeleteAccount = ({ text }: Props) => {
  const [deleteAcc] = useDeleteAccountMutation()
  const handleDeleteAccount = () => {
    deleteAcc()
  }
  const { firstText, lastText, name } = extractTextParts(text ?? '')

  return (
    <DialogModal
      buttonName={'delete account'}
      callBack={handleDeleteAccount}
      triggerVariant={'link'}
    >
      {[
        <TextFormat key={'text-1'} style={{ display: '' }} variant={'body1'}>
          <span style={{ display: 'flex' }}>
            {firstText}
            <TextFormat className={s.name}>{`${name}`}</TextFormat>
          </span>
          {lastText}
        </TextFormat>,
      ]}
    </DialogModal>
  )
}
