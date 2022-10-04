/**
 * External Dependencies
 */
import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { NavLink } from "react-router-dom";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

/**
 * Internal Dependencies
 */
import { axiosInstance, slugify } from "../../../_helpers/utils";
import Ico from "./Ico";

import styles from "./HeaderLinks.module.scss";

const HeaderLinks = () => {
	const [ subsidiaries, setSubsidiaries ] = useState( [] );
	const [ openSubsidiaries, setOpenSubsidiaries ] = useState( false );
	const anchorRef = useRef( null );

	const handleToggle = () => {
		setOpenSubsidiaries( ( prevOpen ) => ! prevOpen );
	};

	const handleClose = ( event ) => {
		if ( anchorRef.current && anchorRef.current.contains( event.target ) ) {
			return;
		}

		setOpenSubsidiaries( false );
	};

	const handleListKeyDown = ( event ) => {
		if ( event.key === 'Tab' ) {
		  event.preventDefault();
		  setOpenSubsidiaries( false );
		}
	}

	const prevOpen = useRef( openSubsidiaries );

	const fetchSubsidiaries = async () => {
		await axiosInstance({
			method: 'get',
			url: `subsidiary`
		}).then(( subs ) => {
			setSubsidiaries( subs );
		});
	}

	useEffect( () => {
		fetchSubsidiaries();
	
		if ( prevOpen.current === true && openSubsidiaries === false ) {
			anchorRef.current.focus();
		}

		prevOpen.current = openSubsidiaries;

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ openSubsidiaries ] );

	return (
		<nav className={ styles.headerLinks }>
			<div className={ styles.headerLinks__items }>
				<div className={ styles.headerLinks__items }>
					<div className={ styles.footer__topLinks }>
						<NavLink
							activeClassName={styles.headerLinks__menuActive}
							to="/about"
						>
							About
						</NavLink>
						<NavLink
							ref={ anchorRef }
							aria-controls={ openSubsidiaries ? 'menu-list-grow' : undefined }
							aria-haspopup="true"
							onClick={ handleToggle }
							to={ false }
						>
							Subsidiaries {/* <i className={ styles.headerLinks__arrowDown }></i> */}
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
							to="/contact"
						>
							Contact
						</NavLink>
					</div>

					<Popper open={ openSubsidiaries } anchorEl={ anchorRef.current } role={ undefined } transition disablePortal>
						{ ( { TransitionProps, placement } ) => (
						<Grow
							{ ...TransitionProps }
							style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
						>
							<Paper style={{ borderRadius: '6px' }}>
								<ClickAwayListener onClickAway={ handleClose }>
									<MenuList
										className={ styles.headerLinks__list } 
										id="menu-list-grow" 
										autoFocusItem={ openSubsidiaries } 
										onKeyDown={ handleListKeyDown }
									>
										{ subsidiaries.data && subsidiaries.data.map( ( subsidiary ) => (
											<MenuItem key={ subsidiary.id } className={ styles.headerLinks__inner }>
												<Ico id={ subsidiary.acf.icon } />
												<NavLink
													className={ styles.headerLinks__item }
													activeClassName={ styles.headerLinks__menuActive }
													to={ `/subsidiary/${ slugify( subsidiary.title.rendered ) }/${ subsidiary.id }` }
													style={{
														color: "#0c1e31",
														fontSize: "16px",
														margin: "0 15px"
													}}
												>
													<ReactMarkdown>
														{ subsidiary.title.rendered }
													</ReactMarkdown>
												</NavLink>
											</MenuItem>
										))}
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
						)}
					</Popper>
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
