import styles from './SkillsCard.module.css';

type Props = {
  data: (string | number)[];
};

export function SkillsCard({ data }: Props) {
  const items = [];
  for (let i = 0; i < data.length; i += 2) {
    let colored = [];
    for (let j = 0; j < 5; j++) {
      const enabledCircles = data[i + 1] as number;
      if (j < enabledCircles) {
        colored.push(<li key={j} className={styles.enabled}></li>);
      } else {
        colored.push(<li key={j}></li>)
      }
    }
    items.push(<li key={i}><span>{data[i]}</span><ul>{colored}</ul></li>);
  }

  return (
    <ul className={styles.container}>
      {items}
    </ul>
  );
}
