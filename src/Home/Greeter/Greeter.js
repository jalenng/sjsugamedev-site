import styles from './Greeter.module.css'

import { useState } from 'react'

import Container from '../../components/Container'
import ActionButton from '../../components/ActionButton'
import Modal from '../../components/Modal'

import welcomeImage from '../../images/welcome.png'
import youTubeIcon from '../../images/socials/youtube.svg'

function Greeter () {
  const background =
    `linear-gradient(
      to right,
      rgba(255, 255, 255, 1.0), 
      rgba(255, 255, 255, 0.67)
    ), 
    url(${welcomeImage})`

  const [videoVisible, setVideoVisible] = useState(false)

  return (
    <Container
      isPadded
      backgroundImage={background}
      className={styles.container}
    >

      {/* Text */}
      <div className={styles.content}>
        <h2>We are the</h2>
        <span className={styles.emphasis1}>
          Game Dev Club
        </span>
        <br />
        <span className={styles.emphasis2}>
          @ San José State University
        </span>
      </div>

      {/* Buttons */}
      <div className={styles.buttonList}>
        <ActionButton
          onClick={() => setVideoVisible(true)}
          styles={{
            color: 'white',
            backgroundColor: '#dd2222'
          }}
        >
          <img src={youTubeIcon} alt='YouTube' width='32' height='32' className='svg' />
          Watch our promo
        </ActionButton>

        {videoVisible && (
          <Modal
            onClose={() => setVideoVisible(false)}
          >
            <iframe width='100%' height='100%' src='https://www.youtube-nocookie.com/embed/si1OwWjZnk0?autoplay=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
          </Modal>
        )}
      </div>

    </Container>
  )
}

export default Greeter
