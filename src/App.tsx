import { useEffect } from 'react';
import SkillsCard from './components/SkillsCard';
import ProjectCard from './components/ProjectCard';
import s from './App.module.css';
import starImg from './assets/star.png';
import arrowImg from './assets/arrow.svg';
import Avito_internship_project_screenshot from './assets/projects_screenshots/Avito-internship-project_1280x720.png';
import Password_generator_app_screenshot from './assets/projects_screenshots/Password-generator-app_1280x720.jpg';
import Product_preview_card_component_screenshot from './assets/projects_screenshots/Product-preview-card-component_1280x720.jpg';

function App() {
  function scrollAnimation() {
    if (window.scrollY < window.innerHeight) {
      scrollTo({top: window.innerHeight, behavior: 'smooth'});
    } else {
      scrollTo({top: window.innerHeight * 2, behavior: 'smooth'});
    }
  }

  useEffect(() => {
    const arrow = document.getElementsByClassName(s.arrow)[0] as HTMLImageElement;
    window.onscroll = function() {
      if (window.scrollY % window.innerHeight > 150 ||
          window.scrollY >= window.innerHeight * 2) {
        arrow.classList.add(s.hidden);
      } else {
        arrow.classList.remove(s.hidden);
      }
    }
  }, [])

  return (
    <>
      <div className={s.line1}></div>
      <div className={s.line2}></div>
      <img className={s.star} src={starImg} alt="star" />
      <img className={s.arrow} src={arrowImg} alt="Прокурутка вниз" role="button" onClick={scrollAnimation} />

      <section className={s['intro-section']}>
        <div className={s.intro}>
          <div className={s['intro__greeting-start']}>&lt;Привет&gt; Меня зовут</div>
          <h1 className={s.intro__name}>Николай Баланцев</h1>
          <h3 className={s.intro__specialization}>Будущий Front-end разработчик</h3>
          <p className={s.intro__description}>Мне 20 лет. Обучаюсь в РТУ МИРЭА на 3 курсе по специальности "Программная инженерия". С 10 класса изучаю программирование, начинал с Python. В ВУЗе немного выучил C++, Java и алгоритмы. Ещё до поступления понял что больше всего меня интересует веб-разработка, поэтому в свободное время учил HTML, CSS, JS и React.</p>
          <div className={s['intro__greeting-end']}>&lt;/Привет&gt;</div>
        </div>
      </section>

      <section className={s['skills-section']}>
        <div className={s.skills}>
          <h2 className={s.skills__header}>Навыки</h2>
          <div className={s.skills__container}>
            <SkillsCard data={['React', 2, 'TypeScript', 3, 'JavaScript', 3]} />
            <div className={s.skills__divider}></div>
            <SkillsCard data={['HTML', 4, 'CSS', 3, 'Node.js', 1]} />
          </div>
          <SkillsCard data={['Git', 3, 'Linux', 2, 'Python', 2]} />
        </div>
      </section>

      <section className={s['projects-section']}>
        <div className={s.projects}>
          <h2 className={s.projects__header}>Проекты</h2>
          <div className={s.projects__container}>
            <ProjectCard
              previewImg={Avito_internship_project_screenshot}
              linkGitHub="https://github.com/NikolaB131/Avito-internship-project"
              header="Клон Hacker News">
              Тестовое задание для отбора на стажировку в Авито.<br />
              Клиент запрашивает информацию с локального сервера, а тот уже запрашивает с API Hacker News
            </ProjectCard>
            <ProjectCard
              previewImg={Password_generator_app_screenshot}
              linkDemo="https://nikolab131.github.io/Password-generator-app/"
              linkGitHub="https://github.com/NikolaB131/Password-generator-app"
              header="Генератор паролей">
              Простой генератор паролей, свёрстан на HTML+CSS, логика реализована на чистом JS<br />
              Адаптивность присутствует
            </ProjectCard>
            <ProjectCard
              previewImg={Product_preview_card_component_screenshot}
              linkDemo="https://nikolab131.github.io/Product-preview-card-component/"
              linkGitHub="https://github.com/NikolaB131/Product-preview-card-component"
              header="Карточка предварительного просмотра продукта">
              Карточка свёрстана на HTML+CSS.<br />
              Адаптивность присутствует
            </ProjectCard>
          </div>
        </div>
      </section>
    </>
  )
}

export default App;