/**
 * External Dependencies
 */
import React from "react";
import { Route, Routes } from "react-router-dom";
 
/**
 * Internal Dependencies
 */
import "./App.scss";

const App = () => {
  return (
		<Routes>
			<Route exact path="/" element="Home" />
			<Route path="*" element="404" />
		</Routes>
	);
};

export default App;
