/**
 * External Dependencies
 */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import {
	Menu,
	MenuItem,
	AppBar,
	Toolbar,
	Hidden,
	Drawer,
} from "@material-ui/core";

/**
 * Internal Dependencies
 */
import { toAbsoluteUrl } from "../../_helpers/utils";
import MenuConfig from "../../_helpers/MenuConfig";

import customStyles from "./Header.module.scss";
import styles from "./headerStyle";

const useStyles = makeStyles( styles );

export default function Header( props ) {
	const classes = useStyles();
	const [ mobileOpen, setMobileOpen ] = React.useState( false );

	useEffect( () => {
		if ( props.changeColorOnScroll ) {
			window.addEventListener( "scroll", headerColorChange );
		}
		return function cleanup() {
			if ( props.changeColorOnScroll ) {
				window.removeEventListener( "scroll", headerColorChange );
			}
		};
	});

	const handleDrawerToggle = () => {
		setMobileOpen( !mobileOpen );
	};

	const headerColorChange = () => {
		const { color, changeColorOnScroll } = props;
		const windowsScrollTop = window.pageYOffset;
		if ( windowsScrollTop > changeColorOnScroll.height ) {
			document.body
				.getElementsByTagName( "header" )[ 0 ]
				.classList.remove( classes[ color ] );
			document.body
				.getElementsByTagName( "header" )[ 0 ]
				.classList.add( classes[ changeColorOnScroll.color ] );
		} else {
			document.body
				.getElementsByTagName( "header" )[ 0 ]
				.classList.add( classes[ color ] );
			document.body
				.getElementsByTagName( "header" )[ 0 ]
				.classList.remove( classes[ changeColorOnScroll.color ] );
		}
	};

	const { color, rightLinks, leftLinks, fixed, absolute } = props;

	const appBarClasses = classNames( {
		[ classes.appBar ]: true,
		[ classes[ color ] ]: color,
		[ classes.absolute ]: absolute,
		[ classes.fixed ]: fixed,
	});

	const brandComponent = (
		<Link to="/">
			<img
				alt="Logo"
				src={ toAbsoluteUrl( "/logo.jpg" ) }
				style={{ height: "50px", width: "auto", objectFit: "contain" }}
			/>
		</Link>
	);

	return (
		<AppBar className={ appBarClasses }>
			<Toolbar className={ customStyles.header }>
				{ leftLinks !== undefined ? brandComponent : null }
				<div className={ customStyles.header__logo }>
					{ leftLinks !== undefined ? (
						<Hidden smDown implementation="css">
							{ leftLinks }
						</Hidden>
					) : (
						brandComponent
					) }
				</div>
				<Hidden
					smDown
					implementation="css"
					className={ customStyles.header__menu }
				>
					{ rightLinks }
				</Hidden>
				<Hidden mdUp>
					<div
						color="inherit"
						aria-label="open drawer"
						onClick={ handleDrawerToggle }
						style={{
							backgroundImage: `url(${toAbsoluteUrl(
								"/hamburger-menu.svg"
							)})`,
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundSize: "contain",
							width: "35px",
							height: "35px",
						}}
					>
						<Menu id="simple-menu" keepMounted>
							{ MenuConfig.header.menuItem.map( ( menu ) => (
								<MenuItem
									to={ menu.page }
									key={ menu.id }
								>
									{ menu.title }
								</MenuItem>
							)) }
						</Menu>
					</div>
				</Hidden>
			</Toolbar>
			<Hidden mdUp implementation="js">
				<Drawer
					variant="temporary"
					anchor={ "right" }
					open={ mobileOpen }
					classes={{
						paper: classes.drawerPaper,
					}}
					onClose={ handleDrawerToggle }
				>
					<div className={ classes.appResponsive }>
						{ leftLinks }
						{ rightLinks }
					</div>
				</Drawer>
			</Hidden>
		</AppBar>
	);
}
