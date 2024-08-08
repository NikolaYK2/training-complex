import { useNavigate } from 'react-router-dom'

import { DECKS_ROUTE, LEARN_ROUTE } from '@/routes/Router'

type Params = {
  idCard: string | undefined
}
export const useRedirectLearn = ({ idCard }: Params) => {
  const navigate = useNavigate()
  const handleRedirectLearnClick = () => {
    if (idCard) {
      navigate(`${DECKS_ROUTE}/${idCard}${LEARN_ROUTE}`)
    }
  }

  return { handleRedirectLearnClick }
}
