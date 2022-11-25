import { Link } from 'react-router-dom'
import { paths } from '../../paths'

import styles from './PlaneItem.module.css'

export const PlaneItem = ({ name = '', price = 0, planeImage = '', _id = '', capacity = '' }) => {
  return (
    <Link to={`${paths.plane}/${_id}`} className={styles.planeItem}>
      <div className={styles.capacity}>{capacity}</div>
      {planeImage && <img src={planeImage} alt="" className={styles.image} />}
      <div className={styles.info}>
        <h2 className={styles.title}>{name}</h2>
        <span className={styles.price}>{price}</span>
      </div>
    </Link>
  )
}
