import styles from './Banner.module.css'

import Container from "./Container"

function Banner(props) {
  return (
    <div className={styles['banner']} style={props.styles}>
      {props.children}
    </div>
  )
}

export default Banner