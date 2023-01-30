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
					content.map( ( item, idx ) => (
						<Tab key={ idx }>
							{ item.year }
						</Tab>
					))
				}
			</TabList>

			{ content &&
				content.map( ( item, idx ) => (
					<TabPanel key={ idx }>
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
