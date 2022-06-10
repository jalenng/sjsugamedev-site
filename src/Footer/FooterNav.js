import styles from './FooterNav.module.css'

import Container from '../components/Container'

import { Link } from 'react-router-dom'

function createTab(tab) {
  // External link: use <a>
  if (tab.isExternal) {
    return (
      <a
        href={tab.link}
        className={styles['tab']}
        key={tab.label}
      >
        <div className={styles['tab-text']}>
          {tab.label}
        </div>
      </a>
    )
  }

  // Internal link: use <Link>
  else {
    return (
      <Link
        to={tab.link}
        className={styles['tab']}
        key={tab.label}
      >
        <div className={styles['tab-text']}>
          {tab.label}
        </div>
      </Link>
    )
  }
}

function FooterNav(props) {
  const homeTab = {
    label: 'Home',
    link: '/'
  }
  const tabs = [homeTab, ...props.tabs]

  return (
    <Container isPadded={true} className={styles['container']}>
      {tabs.map(createTab)}
    </Container>
  )
}

export default FooterNav