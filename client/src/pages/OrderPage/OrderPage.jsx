import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/UI/Button'
import { ContentWrapper } from '../../components/ContentWrapper'

import styles from './OrderPage.module.css'

export const OrderPage = () => {
  const navigate = useNavigate()

  return (
    <ContentWrapper className={styles.order}>
      <h1>Ваш заказ будет доставлен в ближайшее время</h1>
      <Button containerClassName={styles.button} onClick={() => navigate('/')}>
        На главную
      </Button>
    </ContentWrapper>
  )
}
