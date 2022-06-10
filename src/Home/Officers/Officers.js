import styles from './Officers.module.css'

import Container from '../../components/Container'
import Profile from './Profile'

import logo from '../../images/logo.png'

const officers = [
  {
    name: 'Rafael Padilla Perez',
    position: 'President',
    image: logo
  },
  {
    name: 'Joshua Smith',
    position: 'Vice President',
    image: logo
  },
  {
    name: 'Yunseo (Claire) Han',
    position: 'Treasurer',
    image: logo
  },
  {
    name: 'Christian Acosta',
    position: 'Event Coordinator',
    image: logo
  },
  {
    name: 'Julius Moridis',
    position: 'Streaming Coordinator',
    image: logo
  },
  {
    name: 'Jasmine S',
    position: 'Graphic Designer',
    image: logo
  },
  {
    name: 'Jalen Ng',
    position: 'Web Director',
    image: logo
  }
]

function Officers () {
  return (
    <Container
      isPadded
      className={styles.container}
    >
      <h2>Officers</h2>

      <div className={styles['officers-list']}>
        {officers.map(officer => (
          <Profile
            key={officer.name}
            name={officer.name}
            position={officer.position}
            image={officer.image}
          />
        ))}
      </div>
    </Container>
  )
}

export default Officers
