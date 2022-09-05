/**
 * External Dependencies
 */
import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Internal Dependencies
 */
import MenuConfig from "../../../_helpers/MenuConfig";

import styles from "./HeaderLinks.module.scss";

const HeaderLinks = () => {
	return (
		<nav className={ styles.headerLinks }>
			<div className={ styles.headerLinks__items }>
				<div className={ styles.headerLinks__items }>
					{ MenuConfig.header.menuItem.map( ( menu ) => (
						<div key={ menu.id } className={ styles.footer__topLinks }>
							<NavLink
								to={ menu.page }
							>
								{ menu.title }
							</NavLink>
						</div>
					))}
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
