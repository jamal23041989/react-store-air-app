import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPlanes } from '../../store/slice/planesSlice'

import { useSortPlanes } from '../../hooks/useSortPlanes'
import { paths } from '../../paths'
import { ContentWrapper } from '../ContentWrapper'
import { PlaneItem } from '../PlaneItem'
import { Spinner } from '../UI/Spinner'
import { Button } from '../UI/Button'

import styles from './Planes.module.css'

export const Planes = () => {
  const dispatch = useDispatch()
  const { planes, isLoading } = useSelector(state => state.planes)
  const { isDescSort, setIsDescSort, sortedPlanes } = useSortPlanes(planes || [])

  useEffect(() => {
    dispatch(getPlanes())
  }, [dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <div className={styles.sort}>
        <ContentWrapper className={styles.planesHeader}>
          <Button className={styles.sortBtn} onClick={() => setIsDescSort(!isDescSort)}>
            Сортировать цену:
            <span style={{ color: '#bf3d89' }}>{`${isDescSort ? ' по возрастанию' : ' по убыванию'}`}</span>
          </Button>
          <Link to={paths.createPlane} className={styles.createPlaneBtn}>
            Добавить самолёт
          </Link>
        </ContentWrapper>
      </div>
      <ContentWrapper className={styles.planesGrid}>
        {sortedPlanes && sortedPlanes.map(plane => <PlaneItem key={plane._id} {...plane} />)}
      </ContentWrapper>
    </>
  )
}
