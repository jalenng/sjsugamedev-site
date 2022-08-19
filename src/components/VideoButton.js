import styles from './VideoButton.module.css'

import playIcon from '../images/icons/play-circle.svg'

function VideoButton (props) {
  return (
    <a
      href={props.href}
      className={styles.button}
      style={props.styles}
      onClick={props.onClick}
    >

      <iframe
        className={styles.video}
        width='105%'
        height='105%'
        src={props.src}
        title='YouTube video player'
        frameborder='0'
        allow='autoplay; encrypted-media'
      />

      <div className={styles.gradientOverlay} />

      <div className={styles.overlayPlayIcon}>
        <img src={playIcon} alt='Play' width='32' height='32' class='svg' />
      </div>

    </a>
  )
}

export default VideoButton
