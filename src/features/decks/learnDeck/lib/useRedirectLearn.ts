import { useNavigate } from 'react-router-dom'

import { DECK_ROUTE, LEARN_ROUTE } from '@/routes/Router'

type Params = {
  idCard: string | undefined
}
export const useRedirectLearn = ({ idCard }: Params) => {
  const navigate = useNavigate()
  const handleRedirectLearnClick = () => {
    if (idCard) {
      navigate(`${DECK_ROUTE}/${idCard}${LEARN_ROUTE}`)
    }
  }

  return { handleRedirectLearnClick }
}
