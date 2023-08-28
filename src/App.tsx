import { useEffect, useRef } from 'react';
import { ProjectCard } from './components/ProjectCard';
import starPng from './assets/star.png';
import arrowSvg from './assets/arrow.svg';
import armageddon_2023_screenshot from './assets/projects_screenshots/Armageddon-2023.png';
import message_editor_screenshot from './assets/projects_screenshots/Message-editor.png';
import soundwave_frontend_screenshot from './assets/projects_screenshots/Soundwave-frontend.jpg';
import avito_internship_project_screenshot from './assets/projects_screenshots/Avito-internship-project_1280x720.png';
import password_generator_app_screenshot from './assets/projects_screenshots/Password-generator-app_1280x720.jpg';
import product_preview_card_component_screenshot from './assets/projects_screenshots/Product-preview-card-component_1280x720.jpg';
import styles from './App.module.css';

export function App() {
  const arrowRef = useRef<HTMLImageElement>(null)

  const onArrowClick = () => { // scroll animation
    if (window.scrollY < window.innerHeight) {
      scrollTo({top: window.innerHeight, behavior: 'smooth'});
    }
  };

  useEffect(() => {
    const arrow = arrowRef.current;
    if (arrow) {
      window.onscroll = function() {
        if (window.scrollY >= window.innerHeight / 2) {
          arrow.classList.add(styles.hidden);
        } else {
          arrow.classList.remove(styles.hidden);
        }
      }
    }
  }, [])

  return (
    <>
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
      <img className={styles.star} src={starPng} alt="star" />
      <img
        ref={arrowRef}
        className={styles.arrow}
        src={arrowSvg}
        alt="Прокурутка вниз"
        role="button"
        onClick={onArrowClick}
      />

      <div className={styles['intro-section']}>
        <section className={styles.intro}>
          <div className={styles['intro__greeting-start']}>&lt;Привет&gt; Меня зовут</div>
          <h1 className={styles.intro__name}>Николай Баланцев</h1>
          <h3 className={styles.intro__specialization}>Front-end разработчик</h3>
          <p className={styles.intro__description}>Мне 20 лет. Обучаюсь в РТУ МИРЭА на 4 курсе по специальности "Программная инженерия".<br />В свободное время изучал удивительный мир веб-разработки.<br />Прошел стажировку в команде международного такси в Яндексе.</p>
          <div className={styles['intro__greeting-end']}>&lt;/Привет&gt;</div>
        </section>
      </div>

      <section className={styles.projects}>
        <h2 className={styles.projects__header}>Проекты</h2>
        <div className={styles.projects__container}>
          <ProjectCard
            previewImg={armageddon_2023_screenshot}
            linkDemo="https://armageddon.nikolab131.xyz/"
            linkGitHub="https://github.com/NikolaB131-org/Armageddon-2023"
            header="Armageddon 2023">
            Онлайн-сервис по мониторингу и уничтожению опасных астероидов на основе данных API NASA.<br />Next.js, Адаптивная вёрстка
          </ProjectCard>
          <ProjectCard
            previewImg={message_editor_screenshot}
            linkDemo="https://message-editor.nikolab131.xyz/"
            linkGitHub="https://github.com/NikolaB131-org/Message-editor"
            header="Message editor">
            Редактор сообщений с поддержкой переменных и гибких вложенных условий. Данные хранится в виде дерева и сериализуются в JSON
          </ProjectCard>
          <ProjectCard
            previewImg={soundwave_frontend_screenshot}
            linkGitHub="https://github.com/serguun42/SoundWave/tree/master/frontend"
            header="Фронтенд для сервиса музыки">
            Проект для университета, делался на коленке за 3 дня :) Бэкенд делал другой разработчик.<br />Redux toolkit, React Router
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
            Адаптивная вёрстка
          </ProjectCard>
          <ProjectCard
            previewImg={product_preview_card_component_screenshot}
            linkDemo="https://nikolab131.github.io/Product-preview-card-component/"
            linkGitHub="https://github.com/NikolaB131/Product-preview-card-component"
            header="Карточка предварительного просмотра продукта">
            Карточка свёрстана на HTML+CSS.<br />
            Адаптивная вёрстка
          </ProjectCard>
        </div>
      </section>
    </>
  );
}
