import L from "leaflet";
import { useEffect } from "preact/hooks";
import { signal } from "@preact/signals";
import "leaflet/dist/leaflet.css";
export function Map() {
  const map = signal<null | L.Map>(null);
  useEffect(() => {
    map.value = L.map("map").setView([51.505, -0.09], 13);
    return () => {
      if (map.value) {
        map.value.remove();
      }
    };
  }, []);
  return (
    <div>
      <h1>map </h1>
      <div id="map" className="w-screen h-96"></div>
    </div>
  );
}
