import { useEffect, useRef, useState } from "react";
import GoogleMap, { Maps } from "google-map-react";
import { useDispatch, useSelector } from "react-redux";

import Marker from "./components/Marker";
import { getBinsCoordinatesServer } from "redux/actions/coordinatesActions";
import { getBinsCoordinates } from "redux/reducers/coordinatesReducer";
import { MapApiLoadedProps, MapChangeProps } from "./types";
import { mapConfig } from "./config";

const Map = () => {
  // probably incorrect type
  const mapRef = useRef<Maps | null>(null);
  const dispatch = useDispatch();

  const [bounds, setBounds] = useState<number[]>([]);
  const [zoom, setZoom] = useState(10);
  const [previewMarkerId, setPreviewMarkerId] = useState<string | null>(null);

  const binsCoordinates = useSelector(getBinsCoordinates);

  const handleMapChange = ({ zoom, bounds }: MapChangeProps) => {
    setZoom(zoom);
    setBounds([bounds.nw.lng, bounds.se.lat, bounds.se.lng, bounds.nw.lat]);
  };
  const handleApiLoaded = ({ map }: MapApiLoadedProps) => {
    mapRef.current = map;
  };

  useEffect(() => {
    dispatch(getBinsCoordinatesServer());
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <GoogleMap {...mapConfig} onGoogleApiLoaded={handleApiLoaded} onChange={handleMapChange}>
        {binsCoordinates.map((marker, index) => {
          return <Marker key={index} lat={marker.lat} lng={marker.lng} />;
        })}
      </GoogleMap>
    </div>
  );
};

export default Map;
