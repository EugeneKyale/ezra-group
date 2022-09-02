/**
 * External Dependencies
 */
import React from "react";
import { Route, Routes } from "react-router-dom";

/**
 * Internal Dependencies
 */
import Home from "./pages/home";
import Privacy from "./pages/privacy";
import Four0Four from "./pages/404";

import "./App.scss";

const App = () => {
	return (
		<Routes>
			<Route exact path="/" element={ <Home /> } />
			<Route exact path="/privacy" element={ <Privacy /> } />
			<Route path="*" element={ <Four0Four /> } />
		</Routes>
	);
};

export default App;
