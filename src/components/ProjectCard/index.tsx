import githubSvg from '../../assets/github.svg';
import styles from './ProjectCard.module.css';

type Props = {
  previewImg?: string;
  linkDemo?: string;
  linkGitHub?: string;
  descriptionFontSizeRem?: number;
  header: string;
  children: React.ReactNode;
};

export function ProjectCard({ previewImg, linkDemo, linkGitHub, descriptionFontSizeRem, header, children }: Props) {
  return (
    <div className={styles.container}>
      {previewImg !== undefined && <img className={styles['preview-image']} src={previewImg} alt="Картинка проекта" />}
      <div className={styles.content}>
        <h3 className={styles.content__header}>{header}</h3>
        <hr className={styles.content__divider} />
        <p className={styles.content__description} style={descriptionFontSizeRem ? {fontSize: `${descriptionFontSizeRem}rem`} : undefined}>{children}</p>
        <div className={styles.content__buttons}>
          {linkDemo && (
            <a className={styles.content__buttons__demo} href={linkDemo} target="_blank" role="button">
              Live demo
            </a>
          )}
          {linkGitHub && (
            <a className={styles.content__buttons__github} href={linkGitHub} target="_blank" role="button">
              <img src={githubSvg} alt="Ссылка на GitHub" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
