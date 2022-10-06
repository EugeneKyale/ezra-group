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
import Csr from "./pages/csr";
import Posts from "./pages/posts";
import Post from "./pages/post";
import Contact from "./pages/contact";
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
			<Route exact path="/csr" element={ <Csr /> } />
			<Route exact path="/news" element={ <Posts /> } />
			<Route exact path="/news/:slug/:id" element={ <Post /> } />
			<Route exact path="/contact" element={ <Contact /> } />
			<Route path="*" element={ <Four0Four /> } />
		</Routes>
	);
};

export default App;
