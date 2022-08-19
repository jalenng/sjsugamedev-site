import { useState } from 'react'

import Modal from './Modal'

import styles from './Card.module.css'

function Card (props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function toggleModal () {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <div>

      <a className={styles.card} href={props.href} onClick={toggleModal}>
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

      {/* Modal */}
      {modalIsOpen &&
        <Modal>TEST</Modal>}

    </div>
  )
}

export default Card
