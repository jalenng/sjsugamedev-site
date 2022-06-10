import styles from './Greeter.module.css'

import Container from '../../components/Container'
import ActionButton from '../../components/ActionButton'

import welcomeImage from '../../images/welcome.png'
import discordIcon from '../../images/socials/discord.svg'

function Greeter () {
  const background =
    `linear-gradient(
      to right,
      rgba(255, 255, 255, 1.0), 
      rgba(255, 255, 255, 0.67)
    ), 
    url(${welcomeImage})`
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
          href='https://discord.gg/xGv8qYA'
          styles={{
            color: 'white',
            backgroundColor: '#5865F2'
          }}
        >
          <img src={discordIcon} alt='Discord' width='32' height='32' />
          Join our Discord
        </ActionButton>
      </div>

    </Container>
  )
}

export default Greeter
