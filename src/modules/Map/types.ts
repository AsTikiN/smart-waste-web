import { Bounds, Maps } from "google-map-react";

export interface MapChangeProps {
  zoom: number;
  bounds: Bounds;
}

export interface MapApiLoadedProps {
  map: Maps;
}
