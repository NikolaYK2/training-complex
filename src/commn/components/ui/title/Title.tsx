import { CSSProperties, ReactNode, useState } from 'react'

import { FilePreviewPortal } from '@/commn/components/ui/filePreviewPortal/FilePreviewPortal'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'

import s from './Title.module.scss'

type Props = {
  children: ReactNode
  imageTitle?: null | string
  marginBot?: CSSProperties['marginBottom']
  name: string
}
export const Title = ({ children, imageTitle, marginBot, name }: Props) => {
  const styles: CSSProperties = { marginBottom: marginBot }
  const [isActivePreview, setActivePreview] = useState(false)

  return (
    <div className={s.containerTitle} style={styles}>
      <div className={s.blockItem}>
        <TextFormat variant={'h1'}>{name}</TextFormat>
        {children}
      </div>
      {imageTitle && (
        <div className={s.imageTitle} onClick={() => setActivePreview(true)}>
          <img alt={'image'} src={imageTitle} />
        </div>
      )}
      {isActivePreview && <FilePreviewPortal onClose={setActivePreview} src={imageTitle ?? ''} />}
    </div>
  )
}
