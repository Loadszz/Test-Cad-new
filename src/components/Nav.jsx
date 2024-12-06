import { useLanguageSwitch } from '@/assets/useLanguageSwitch'
import { Link } from 'react-scroll'

const Nav = ({
	navStyle,
	ulStyle,
	liStyle,
	isOpen,
	isOffcet,
	handleBurger,
}) => {
	const { t, locale, locales, handleClick } = useLanguageSwitch()
	return (
		<nav className={navStyle}>
			<ul className={ulStyle}>
				<li className={liStyle}>
					<Link
						to='services'
						activeClass='active'
						smooth={true}
						spy={true}
						offset={isOffcet}
						onClick={isOpen ? handleBurger : null}
					>
						{t('header.navigation-1')}
					</Link>
				</li>
				<li className={liStyle}>
					<Link
						to='advantages'
						activeClass='active'
						smooth={true}
						spy={true}
						offset={isOffcet}
						onClick={isOpen ? handleBurger : null}
					>
						{t('header.navigation-2')}
					</Link>
				</li>
				<li className={liStyle}>
					<Link
						to='portfolio'
						activeClass='active'
						smooth={true}
						spy={true}
						offset={isOffcet}
						onClick={isOpen ? handleBurger : null}
					>
						{t('header.navigation-3')}
					</Link>
				</li>
				<li className={liStyle}>
					<Link
						to='reviews'
						activeClass='active'
						smooth={true}
						spy={true}
						offset={isOffcet}
						onClick={isOpen ? handleBurger : null}
					>
						{t('header.navigation-4')}
					</Link>
				</li>
				<li className={liStyle}>
					<Link
						to='contact'
						activeClass='active'
						smooth={true}
						spy={true}
						offset={isOffcet}
						onClick={isOpen ? handleBurger : null}
					>
						{t('header.navigation-5')}
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
