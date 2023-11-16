import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, MarkerClusterer, InfoWindow } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getBinsCoordinates } from "redux/reducers/coordinatesReducer";
import { getBinsCoordinatesServer } from "redux/actions/coordinatesActions";
import { BinsCoordinate } from "redux/types/types";
import BrandLoader from "components/Loader/BrandLoader";
import { Stack, Typography, useTheme } from "@mui/material";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const mapConfig = {
  defaultZoom: 13,
  bootstrapURLKeys: {
    key: "AIzaSyDuBBVGj6vOXKk2NGmBNfKIdrtD75iW3bU",
  },
  options: { streetViewControl: false },
};

const defaultCenter = {
  lat: 48.450001,
  lng: 34.983334,
};

const Map = () => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const data = useSelector(getBinsCoordinates);

  const [mapOptions, setMapOptions] = useState({
    center: defaultCenter,
    zoom: 10,
  });
  const [activeMarker, setActiveMarker] = useState<BinsCoordinate | null>(null);
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: mapConfig.bootstrapURLKeys.key,
  });

  const handleMarkerClick = (marker: BinsCoordinate) => () => {
    setActiveMarker(marker);
  };

  const handleRemoveActiveMarker = () => {
    setActiveMarker(null);
  };

  const onLoad = React.useCallback(function callback(map: any) {
    // const bounds = new window.google.maps.LatLngBounds(defaultCenter);
    // map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        },
      );
    } else {
      console.error("Geolocation is not supported in this browser.");
    }
  }, []);
  console.log("userLocation", userLocation);
  if (!isLoaded) return <BrandLoader show={true} />;

  return (
    <div className="map-wrapper" style={{ width: "100%", height: "100vh" }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapOptions.center}
        zoom={mapOptions.zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={mapConfig.options}
      >
        <MarkerClusterer
          averageCenter
          enableRetinaIcons
          gridSize={60}
          styles={[
            {
              textColor: "white",
              url: "https://i.ibb.co/8mrx6J8/Group-1.png",
              height: 40,
              width: 40,
            },
          ]}
        >
          {(clusterer) => {
            return (
              <>
                {data.map((marker, index) => (
                  <>
                    <Marker
                      key={index}
                      position={{ lat: marker.lat, lng: marker.lng }}
                      clusterer={clusterer}
                      onClick={handleMarkerClick(marker)}
                      icon={{
                        url: "https://i.ibb.co/8mrx6J8/Group-1.png",
                        scaledSize: new window.google.maps.Size(40, 40),
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(20, 20),
                      }}
                    ></Marker>
                  </>
                ))}
              </>
            );
          }}
        </MarkerClusterer>
        {userLocation && <Marker position={{ lat: userLocation.lat, lng: userLocation.lng }}></Marker>}
        {activeMarker && (
          <InfoWindow position={{ lat: data[0].lat, lng: data[0].lng }} onCloseClick={handleRemoveActiveMarker}>
            <Stack>
              <Typography variant="body1" color="#0e0e0e">
                Name: {activeMarker.name}
              </Typography>
              <Typography variant="body1" color="#0e0e0e">
                Address: {activeMarker.address}
              </Typography>
            </Stack>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default Map;
