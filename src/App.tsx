import { useState } from 'react'
import arrowImg from './assets/arrow.svg'
import starImg from './assets/star.png'
import s from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={s.line1}></div>
      <div className={s.line2}></div>
      <img className={s.star} src={starImg} />
      <section className={s.intro}>
        <div className={s['intro__greeting-start']}>&lt;Привет&gt; Меня зовут</div>
        <h1 className={s.intro__name}>Николай Баланцев</h1>
        <h3 className={s.intro__specialization}>Front-end разработчик</h3>
        <p className={s.intro__description}>Я front-end разработчик. Учусь в университете МИРЭА. Мне 20 лет. Я ем француские булки с пряностями и люблю кофе, но я пью цикорий. Обожаю матча латте, это очень вкусно.</p>
        <div className={s['intro__greeting-end']}>&lt;/Привет&gt;</div>
      </section>
      <img className={s.arrow} src={arrowImg} alt="Пролистать вниз" />
      {/* <section className={s.skills}>
        <h2>Навыки</h2>
      </section> */}
    </>
  )
}

export default App
