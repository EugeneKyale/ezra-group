/**
 * External Dependencies
 */
import React from "react";
import { Route, Routes } from "react-router-dom";

/**
 * Internal Dependencies
 */
import Home from "./pages/home";
import About from "./pages/about";
import Subsidiary from "./pages/subsidiary";
import Projects from "./pages/projects";
import Project from "./pages/project";
import Privacy from "./pages/privacy";
import Four0Four from "./pages/404";

import "./App.scss";

const App = () => {
	return (
		<Routes>
			<Route exact path="/" element={ <Home /> } />
			<Route exact path="/about" element={ <About /> } />
			<Route exact path="/subsidiary/:slug/:id" element={ <Subsidiary /> } />
			<Route exact path="/project/:slug/:id" element={ <Project /> } />
			<Route exact path="/projects" element={ <Projects /> } />
			<Route exact path="/privacy" element={ <Privacy /> } />
			<Route path="*" element={ <Four0Four /> } />
		</Routes>
	);
};

export default App;
