import styles from './Card.module.css'

function Card (props) {
  return (
    <a className={styles.card} href={props.href}>
      {/* Image */}
      <img src={props.img} className={styles.img} />

      {/* Text */}
      <div className={styles.text}>
        <span className={styles.title}>
          {props.title}
        </span>
        <br />
        <p>{props.text}</p>
      </div>
    </a>
  )
}

export default Card
