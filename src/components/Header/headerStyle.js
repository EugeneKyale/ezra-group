const headerStyle = {
	appBar: {
		display: "flex",
		border: "0",
		padding: "0 clamp(30px, 9vw, 250px)",
		marginBottom: "20px",
		color: "#555",
		width: "100%",
		backgroundColor: "#000", //menu bg color on scroll
		boxShadow:
			"0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
		transition: "all 150ms ease 0s",
		alignItems: "center",
		flexFlow: "row nowrap",
		justifyContent: "flex-start",
		position: "relative",
		zIndex: "unset",
	},
	absolute: {
		position: "absolute",
		zIndex: "1100",
	},
	fixed: {
		position: "fixed",
		zIndex: "1100",
	},
	title: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontWeight: "300",
		lineHeight: "30px",
		fontSize: "18px",
		borderRadius: "3px",
		textTransform: "none",
		color: "inherit",
		padding: "8px 16px",
		letterSpacing: "unset",
		"&:hover,&:focus": {
			color: "inherit",
			background: "transparent",
		},
	},
	appResponsive: {
		margin: "20px 10px",
	},
	primary: {
		backgroundColor: "#9c27b0",
		color: "#FFFFFF",
		boxShadow:
			"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)",
	},
	info: {
		backgroundColor: "#00acc1",
		color: "#FFFFFF",
		boxShadow:
			"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)",
	},
	success: {
		backgroundColor: "#4caf50",
		color: "#FFFFFF",
		boxShadow:
			"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)",
	},
	warning: {
		backgroundColor: "#ff9800",
		color: "#FFFFFF",
		boxShadow:
			"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)",
	},
	danger: {
		backgroundColor: "#f44336",
		color: "#FFFFFF",
		boxShadow:
			"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)",
	},
	rose: {
		backgroundColor: "#e91e63",
		color: "#FFFFFF",
		boxShadow:
			"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(233, 30, 99, 0.46)",
	},
	transparent: {
		backgroundColor: "#000", //menu bg color before scroll, was previously transparent
		boxShadow: "none",
		color: "#FFFFFF"
	},
	dark: {
		color: "#FFFFFF",
		backgroundColor: "#212121 !important",
		boxShadow:
			"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)",
	},
	white: {
		border: "0",
		marginBottom: "20px",
		color: "#555",
		backgroundColor: "#fff !important",
		boxShadow:
			"0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
		padding: "10px 50px",

		"@media (max-width: 768px)": {
			padding: "10px 20px",
		},
	},
	drawerPaper: {
		border: "none",
		bottom: "0",
		transitionProperty: "top, bottom, width",
		transitionDuration: ".2s, .2s, .35s",
		transitionTimingFunction: "linear, linear, ease",
		width: 260,
		boxShadow:
			"0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
		position: "fixed",
		display: "block",
		top: "0",
		height: "100vh",
		right: "0",
		left: "auto",
		visibility: "visible",
		overflowY: "visible",
		borderTop: "none",
		textAlign: "left",
		paddingRight: "0px",
		paddingLeft: "0",
		transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
		backgroundColor: "#000",
		"@media (max-width: 767px)": {
			width: 250,
		},
		"@media only screen and (min-width: 768px) and (max-width: 1024px)": {
			width: 400,
		},
	},
};

export default headerStyle;
