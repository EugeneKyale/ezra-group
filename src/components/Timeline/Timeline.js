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

const Timeline = ( { content } ) => {

	return (
		<Tabs>
			<TabList>
				{ content &&
					content.map( ( item ) => (
						<Tab>
							{ item.year }
						</Tab>
					))
				}
			</TabList>

			{ content &&
				content.map( ( item ) => (
					<TabPanel>
						<div
							dangerouslySetInnerHTML={{
								__html: item.description
							}}
						/>
					</TabPanel>
				))
			}
		</Tabs>
	);
};

export default Timeline;
