import SkillsCard from './components/SkillsCard';
import starImg from './assets/star.png';
import arrowImg from './assets/arrow.svg';
import s from './App.module.css';

function App() {
  function scrollAnimation() {
    if (window.scrollY < window.innerHeight) {
      scrollTo({top: window.innerHeight, behavior: 'smooth'});
    } else {
      scrollTo({top: window.innerHeight * 2, behavior: 'smooth'});
    }
  }

  const arrow = document.getElementsByClassName(s.arrow)[0] as HTMLImageElement;
  window.onscroll = function() {
    if (window.scrollY % window.innerHeight > 150 ||
        window.scrollY == document.documentElement.scrollHeight - window.innerHeight) {
      arrow.classList.add(s.hidden);
    } else {
      arrow.classList.remove(s.hidden);
    }
  }

  return (
    <>
      <div className={s.line1}></div>
      <div className={s.line2}></div>
      <img className={s.star} src={starImg} alt='star' />
      <img className={s.arrow} src={arrowImg} alt='Прокурутка вниз' role="button" onClick={scrollAnimation} />
      <section className={s.intro}>
        <div className={s['intro__greeting-start']}>&lt;Привет&gt; Меня зовут</div>
        <h1 className={s.intro__name}>Николай Баланцев</h1>
        <h3 className={s.intro__specialization}>Front-end разработчик</h3>
        <p className={s.intro__description}>Я front-end разработчик. Учусь в университете МИРЭА. Мне 20 лет. Я ем француские булки с пряностями и люблю кофе, но я пью цикорий. Обожаю матча латте, это очень вкусно.</p>
        <div className={s['intro__greeting-end']}>&lt;/Привет&gt;</div>
      </section>
      <section className={s.skills}>
        <h2 className={s.skills__header}>Навыки</h2>
        <div className={s.skills__container}>
          <SkillsCard data={['React', 2, 'TypeScript', 3, 'JavaScript', 3]}></SkillsCard>
          <div className={s.skills__divider}></div>
          <SkillsCard data={['HTML', 4, 'CSS', 3, 'Node.js', 1]}></SkillsCard>
        </div>
        <SkillsCard data={['Git', 3, 'Python', 2, 'БЭМ', 2]}></SkillsCard>
      </section>
    </>
  )
}

export default App;