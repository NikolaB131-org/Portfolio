import s from './styles.module.css';

function SkillsCard(props: {data: (string | number)[]}) {
  const data = props.data;
  const items = [];
  for (let i = 0; i < data.length; i += 2) {
    let colored = [];
    for (let j = 0; j < 5; j++) {
      if (j < data[i + 1]) {
        colored.push(<li key={j} className={s.enabled}></li>);
      } else {
        colored.push(<li key={j}></li>)
      }
    }
    items.push(<li key={i}><span>{data[i]}</span><ul>{colored}</ul></li>);
  }

  return (
    <ul className={s.container}>
      {items}
    </ul>
  );
}

export default SkillsCard;