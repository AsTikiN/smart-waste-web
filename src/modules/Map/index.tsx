import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, MarkerClusterer } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getBinsCoordinates } from "redux/reducers/coordinatesReducer";
import { getBinsCoordinatesServer } from "redux/actions/coordinatesActions";
import { BinsCoordinate } from "redux/types/types";
import BrandLoader from "components/Loader/BrandLoader";

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
  const data = useSelector(getBinsCoordinates);

  const [mapOptions, setMapOptions] = useState({
    center: defaultCenter,
    zoom: 10, // Initial zoom level
  });
  const [map, setMap] = React.useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: mapConfig.bootstrapURLKeys.key,
  });

  const handleMarkerClick = (marker: BinsCoordinate) => {
    // setMapOptions({
    //   center: { lat: marker.lat, lng: marker.lng },
    //   zoom: 15,
    // });
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
    dispatch(getBinsCoordinatesServer());
  }, []);

  if (!isLoaded) return <BrandLoader show={true} />;

  return isLoaded ? (
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
              url: "https://cdn-icons-png.flaticon.com/512/12535/12535929.png",
              height: 40,
              width: 40,
            },
          ]}
        >
          {(clusterer) => {
            return (
              <>
                {data.map((marker, index) => (
                  <Marker
                    key={index}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    clusterer={clusterer}
                    onClick={() => handleMarkerClick(marker)}
                    icon={{
                      url: "https://cdn-icons-png.flaticon.com/512/12535/12535929.png",
                      scaledSize: new window.google.maps.Size(40, 40),
                      origin: new window.google.maps.Point(0, 0),
                      anchor: new window.google.maps.Point(20, 20),
                    }}
                  >
                    {/* <CustomMarker /> */}
                  </Marker>
                ))}
              </>
            );
          }}
        </MarkerClusterer>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default Map;
