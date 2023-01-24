import s from './styles.module.css';
import githubImg from '../../assets/github.svg';

interface props {
  previewImg: string,
  linkDemo?: string,
  linkGitHub?: string,
  header: string,
  children: any
}

function ProjectCard(props: props) {
  const {previewImg, linkDemo, linkGitHub, header} = props;

  return (
    <div className={s.container}>
      <img className={s['preview-image']} src={previewImg} alt="Картинка проекта" />
      <div className={s.content}>
        <h3 className={s.content__header}>{header}</h3>
        <hr className={s.content__divider} />
        <p className={s.content__description}>{props.children}</p>
        <div className={s.content__buttons}>
          {linkDemo && <a className={s.content__buttons__demo} href={linkDemo}
            target="_blank" role="button">Live demo</a>}
          {linkGitHub && <a className={s.content__buttons__github} href={linkGitHub}
            target="_blank" role="button"><img src={githubImg} alt="Ссылка на GitHub" /></a>}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;