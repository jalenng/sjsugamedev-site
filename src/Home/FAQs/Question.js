import styles from './Question.module.css'

import { useState } from 'react'

import chevronDown from '../../images/symbols/chevron-down.svg'
import chevronUp from '../../images/symbols/chevron-up.svg'

function Question (props) {
  const [isOpen, setIsOpen] = useState(false)

  const openIndicator = isOpen ? chevronUp : chevronDown

  return (
    <div>
      {/* Question header */}
      <div tabIndex='0' onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.header}>
          <div className={styles['header-text']}>
            {props.question}
          </div>
          <img src={openIndicator} alt='Discord' width='32' height='32' />
        </div>
      </div>

      {/* Response content */}
      {isOpen &&
        <div className={styles.content}>
          {props.children}
        </div>}
    </div>
  )
}

export default Question
