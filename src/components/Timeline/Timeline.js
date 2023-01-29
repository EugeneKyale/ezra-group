/**
 * External Dependencies
 */
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

/**
 * Internal Dependencies
 */
import "./Timeline.scss";

const Timeline = () => {

	return (
		<Tabs>
			<TabList>
				<Tab>
					1980's
				</Tab>
				<Tab>
					1990's
				</Tab>
				<Tab>
					1980's
				</Tab>
				<Tab>
					1990's
				</Tab>
				<Tab>
					1980's
				</Tab>
				<Tab>
					1990's
				</Tab>
			</TabList>
		
			<TabPanel>
				Moved to Ethiopia for trade in revamped second-hand coffee machines, cars, spare parts and blending machines.
			</TabPanel>
			<TabPanel>
				After the deportation of the Eritreans from Ethiopia, Tekie and Ghebre formed ARTEGE with an Eritrea partner to trade in the coffee beans business, importing it from Kenya, Uganda and Tanzania.
			</TabPanel>
			<TabPanel>
				Moved to Ethiopia for trade in revamped second-hand coffee machines, cars, spare parts and blending machines.
			</TabPanel>
			<TabPanel>
				After the deportation of the Eritreans from Ethiopia, Tekie and Ghebre formed ARTEGE with an Eritrea partner to trade in the coffee beans business, importing it from Kenya, Uganda and Tanzania.
			</TabPanel>
			<TabPanel>
				Moved to Ethiopia for trade in revamped second-hand coffee machines, cars, spare parts and blending machines.
			</TabPanel>
			<TabPanel>
				After the deportation of the Eritreans from Ethiopia, Tekie and Ghebre formed ARTEGE with an Eritrea partner to trade in the coffee beans business, importing it from Kenya, Uganda and Tanzania.
			</TabPanel>
		</Tabs>
	);
};

export default Timeline;
