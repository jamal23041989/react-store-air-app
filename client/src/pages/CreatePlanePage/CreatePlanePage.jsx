import { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ContentWrapper } from '../../components/ContentWrapper'
import { Button } from '../../components/UI/Button'
import { Input } from '../../components/UI/Input'
import { paths } from '../../paths'
import { createPlane } from '../../store/slice/planeSlice'

import styles from './CreatePlanePage.module.css'

export const CreatePlanePage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { errors } = useSelector(state => state.plane)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [capacity, setCapacity] = useState('')
  const [planeImage, setPlaneImage] = useState(null)

  const handleCreatePlane = useCallback(() => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('capacity', capacity)
    formData.append('planeImage', planeImage)

    dispatch(createPlane(formData)).then(res => {
      if (!res.error) {
        navigate(`${paths.plane}/${res.payload._id}`, { replace: true })
      }
    })
  }, [capacity, description, name, planeImage, price, dispatch, navigate])

  return (
    <ContentWrapper className={styles.createPlane}>
      <Button onClick={() => navigate(-1)} isBackButton={true} containerClassName={styles.backButtonContainer}>
        Назад
      </Button>
      <form action="" className={styles.form}>
        <h1 className={styles.title}>Создать самолёт</h1>
        <Input
          name="name"
          placeholder="Название самолёта"
          error={errors && errors.name && errors.name.message}
          onChange={e => setName(e.target.value)}
        />
        <Input
          name="price"
          placeholder="Цена самолёта"
          error={errors && errors.price && errors.price.message}
          onChange={e => setPrice(e.target.value)}
        />
        <Input
          name="description"
          placeholder="Описание самолёта"
          error={errors && errors.description && errors.description.message}
          onChange={e => setDescription(e.target.value)}
        />
        <Input
          name="capacity"
          placeholder="Вместимость самолёта"
          error={errors && errors.capacity && errors.capacity.message}
          onChange={e => setCapacity(e.target.value)}
        />
        <Input
          name="planeImage"
          type="file"
          placeholder="Вместимость самолёта"
          error={errors && errors.planeImage && errors.planeImage.message}
          onChange={e => setPlaneImage(e.target.files[0])}
        />
        <Button containerClassName={styles.buttonContainer} onClick={handleCreatePlane}>
          Создать
        </Button>
      </form>
    </ContentWrapper>
  )
}
