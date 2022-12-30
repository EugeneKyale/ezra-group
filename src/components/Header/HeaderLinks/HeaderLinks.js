/**
 * External Dependencies
 */
import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./HeaderLinks.module.scss";

const HeaderLinks = () => {

	return (
		<nav className={ styles.headerLinks }>
			<div className={ styles.headerLinks__items }>
				<div className={ styles.headerLinks__items }>
					<div className={ styles.footer__topLinks }>
						<NavLink
							activeClassName={ 'client insisted I add this link 😢 ' + styles.headerLinks__menuActive }
							to="/"
						>
							Home
						</NavLink>
						<NavLink
							activeClassName={styles.headerLinks__menuActive}
							to="/about"
						>
							About
						</NavLink>
						<NavLink
							activeClassName={styles.headerLinks__menuActive}
							to="/subsidiaries"
						>
							Subsidiaries
						</NavLink>
						<NavLink
							activeClassName={styles.headerLinks__menuActive}
							to="/projects"
						>
							Projects
						</NavLink>
						<NavLink
							activeClassName={styles.headerLinks__menuActive}
							to="/csr"
						>
							CSR
						</NavLink>
						<NavLink
							activeClassName={styles.headerLinks__menuActive}
							to="/news"
						>
							News
						</NavLink>
						<NavLink
							activeClassName={styles.headerLinks__menuActive}
							to="/contact"
						>
							Contact
						</NavLink>
					</div>
				</div>
			</div>

			{/* Button */}

			<div className={ styles.headerLinks__btn }>
			</div>

			{/* Social Icons */}

			<div className={ styles.headerLinks__social }>
			</div>
		</nav>
	);
};

export default HeaderLinks;
