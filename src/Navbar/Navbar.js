import styles from './Navbar.module.css'

import { NavLink } from 'react-router-dom'

import Container from '../components/Container'
import logo from '../images/logo.png'

function createTab(tab) {
	// External link: use <a>
	if (tab.isExternal) {
		return (
			<a href={tab.link} className={styles['tab']} key={tab.label}>
				<div className={styles['tab-text']}>
					{tab.label}
				</div>
			</a>
		)
	}

	// Internal link: use <Link>
	else {
		return (
			<NavLink
				to={tab.link}
				className={({ isActive }) =>
					[
						styles['tab'],
						isActive ? styles['active'] : null,
					]
						.filter(Boolean)
						.join(" ")
				}
				key={tab.label}
			>
				<div className={styles['tab-text']}>
					{tab.label}
				</div>
			</NavLink>
		)
	}
}

function Navbar(props) {
	return (
		<Container
			backgroundColor='#fff'
			className={styles['container']}
		>
			{/* Left */}
			<NavLink
				to='/'
				className={({ isActive }) =>
					[
						styles['home-button'],
						isActive ? styles['active'] : null,
					]
						.filter(Boolean)
						.join(" ")}>
				<img src={logo} alt='Home' />
				<div className={styles['home-button-text']}>
					<span className={styles['main']}>Game Dev Club</span>
					<br />
					<span className={styles['sub']}> at <b>SAN JOSÉ STATE UNIVERSITY</b></span>
				</div>
			</NavLink>

			{/* Right */}
			<div className={styles['tabs']}>
				{props.tabs.map(createTab)}
			</div>
		</Container>
	)
}

export default Navbar