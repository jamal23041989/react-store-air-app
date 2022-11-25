import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { getPlane } from '../../store/slice/planeSlice'
import { Spinner } from '../../components/UI/Spinner'
import { ContentWrapper } from '../../components/ContentWrapper'
import { Button } from '../../components/UI/Button'

import styles from './PlanePage.module.css'

export const PlanePage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const dispatch = useDispatch()
  const { plane, isLoading } = useSelector(state => state.plane)

  useEffect(() => {
    dispatch(getPlane(id))
  }, [dispatch, id])

  if (isLoading) return <Spinner />

  return (
    plane && (
      <ContentWrapper className={styles.plane}>
        <div className={styles.descContent}>
          <Button onClick={() => navigate(-1)} isBackButton={true}>
            Назад
          </Button>
          <h1 className={styles.title}>{plane.name}</h1>
          <div className={styles.price}>{plane.price}</div>
          <Button containerClassName={styles.buyBtnContainer} onClick={() => navigate('/order')}>
            Оформить заказ
          </Button>
          <p className={styles.desc}>{plane.description}</p>
        </div>
        <div className={styles.imageContent}>
          <img src={plane.planeImage} alt="" className={styles.image} />
        </div>
      </ContentWrapper>
    )
  )
}
