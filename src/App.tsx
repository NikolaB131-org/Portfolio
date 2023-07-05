import { useEffect } from 'react';
import SkillsCard from './components/SkillsCard';
import ProjectCard from './components/ProjectCard';
import styles from './App.module.css';
import starImg from './assets/star.png';
import arrowImg from './assets/arrow.svg';
import soundwave_frontend_screenshot from './assets/projects_screenshots/Soundwave-frontend.jpg';
import avito_internship_project_screenshot from './assets/projects_screenshots/Avito-internship-project_1280x720.png';
import password_generator_app_screenshot from './assets/projects_screenshots/Password-generator-app_1280x720.jpg';
import product_preview_card_component_screenshot from './assets/projects_screenshots/Product-preview-card-component_1280x720.jpg';

function App() {
  function onArrowClick() { // scroll animation
    if (window.scrollY < window.innerHeight) {
      scrollTo({top: window.innerHeight, behavior: 'smooth'});
    } else {
      scrollTo({top: window.innerHeight * 2, behavior: 'smooth'});
    }
  }

  useEffect(() => {
    const arrow = document.getElementsByClassName(styles.arrow)[0] as HTMLImageElement;
    window.onscroll = function() {
      if (window.scrollY % window.innerHeight > 150 ||
          window.scrollY >= window.innerHeight * 2) {
        arrow.classList.add(styles.hidden);
      } else {
        arrow.classList.remove(styles.hidden);
      }
    }
  }, [])

  return (
    <>
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
      <img className={styles.star} src={starImg} alt="star" />
      <img className={styles.arrow} src={arrowImg} alt="Прокурутка вниз" role="button" onClick={onArrowClick} />

      <section className={styles['intro-section']}>
        <div className={styles.intro}>
          <div className={styles['intro__greeting-start']}>&lt;Привет&gt; Меня зовут</div>
          <h1 className={styles.intro__name}>Николай Баланцев</h1>
          <h3 className={styles.intro__specialization}>Front-end разработчик</h3>
          <p className={styles.intro__description}>Мне 20 лет. Обучаюсь в РТУ МИРЭА на 3 курсе по специальности "Программная инженерия".<br />До поступления понял что больше всего интересует веб-разработка, поэтому в свободное время изучал этот удивительный мир.<br />Прошел стажировку в команде международного такси в Яндексе.</p>
          <div className={styles['intro__greeting-end']}>&lt;/Привет&gt;</div>
        </div>
      </section>

      <section className={styles['projects-section']}>
        <div className={styles.projects}>
          <h2 className={styles.projects__header}>Проекты</h2>
          <div className={styles.projects__container}>
            <ProjectCard
              previewImg={soundwave_frontend_screenshot}
              linkGitHub="https://github.com/serguun42/SoundWave/tree/master/frontend"
              header="Фронтенд для сервиса музыки">
              Проект для университета, делался на коленке за 3 дня :) Бэкенд делал другой разработчик
            </ProjectCard>
            <ProjectCard
              previewImg={avito_internship_project_screenshot}
              linkGitHub="https://github.com/NikolaB131/Avito-internship-project"
              header="Клон Hacker News">
              Тестовое задание для отбора на стажировку в Авито. Клиент запрашивает информацию с локального сервера, а тот уже запрашивает с API Hacker News
            </ProjectCard>
            <ProjectCard
              previewImg={password_generator_app_screenshot}
              linkDemo="https://nikolab131.github.io/Password-generator-app/"
              linkGitHub="https://github.com/NikolaB131/Password-generator-app"
              header="Генератор паролей">
              Простой генератор паролей, свёрстан на HTML+CSS, логика реализована на чистом JS<br />
              Адаптивность присутствует
            </ProjectCard>
            <ProjectCard
              previewImg={product_preview_card_component_screenshot}
              linkDemo="https://nikolab131.github.io/Product-preview-card-component/"
              linkGitHub="https://github.com/NikolaB131/Product-preview-card-component"
              header="Карточка предварительного просмотра продукта">
              Карточка свёрстана на HTML+CSS.<br />
              Адаптивность присутствует
            </ProjectCard>
          </div>
        </div>
      </section>

      <section className={styles['skills-section']}>
        <div className={styles.skills}>
          <h2 className={styles.skills__header}>Навыки</h2>
          <div className={styles.skills__container}>
            <SkillsCard data={['React', 4, 'Redux', 3, 'TypeScript', 3]} />
            <div className={styles.skills__divider}></div>
            <SkillsCard data={['JavaScript', 4, 'HTML', 4, 'CSS', 3]} />
          </div>
          <SkillsCard data={['Git', 3, 'Unix', 4, 'Python', 2]} />
        </div>
      </section>
    </>
  )
}

export default App;
