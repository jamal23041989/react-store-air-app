import { ContentWrapper } from '../ContentWrapper/ContentWrapper'
import WaveImg from './wave.svg'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
      <ContentWrapper className={styles.content}>
        <h1 className={styles.title}>{`Путешествуйте с\n Комфортом`}</h1>
        <p className={styles.desc}>{`С нашей компанией вы забудете обо всем, кроме\n высокого уровня путешествий`}</p>
      </ContentWrapper>
      <img src={WaveImg} alt="wave" className={styles.wave} />
    </div>
  )
}
