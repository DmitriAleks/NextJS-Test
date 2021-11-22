import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span><div>Ш</div> <span>Штрафов </span>нет</span>
        <p>Получение информации о штрафе по УИН</p>
        <div className={styles.test}>
          <input type="text" placeholder={'Введите УИН'}/>
          <button>Найти</button>
        </div>
      </div>
    </div>
  )
}
export default Home
