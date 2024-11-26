import React from "react";
import { MapMarkerProps, MapViewProps } from "react-native-maps";

// Mocking the MapView and Marker components for web using <div> (or other HTML elements)
const MapView = (props: MapViewProps) => React.createElement("div", props);
const Marker = (props: MapMarkerProps) => React.createElement("div", props);
const PROVIDER_GOOGLE = "google";

export default MapView;
export { Marker, PROVIDER_GOOGLE };
