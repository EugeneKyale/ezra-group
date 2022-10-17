/**
 * External Dependencies
 */
import React from "react";
import GoogleMapReact from "google-map-react";

/**
 * Internal Dependencies
 */
import { toAbsoluteUrl } from "../../_helpers/utils";

const Icon = () => <img
    alt=""
    src={ toAbsoluteUrl( "/icons/google-maps.png" ) }
    style={{
        width: "40px"
    }}
/>;

const Map = () => {
    return (
        <div style={{ height: '70vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAyaGrUk4RNBKsVCoO58x1dXlbh7rbQj3A" }}
                defaultCenter={{
                    lat: 4.86580284732,
                    lng: 31.5774560729
                }}
                defaultZoom={ 15 }
            >
                <Icon
                    lat={ 4.86580284732 }
                    lng={ 31.5774560729 }
                    text="Ezra Group"
                />
            </GoogleMapReact>
        </div>
    );
}

export default Map;