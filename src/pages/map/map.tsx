import L from "leaflet";
import { useEffect } from "preact/hooks";
import { signal } from "@preact/signals";
import "leaflet/dist/leaflet.css";
export function Map() {
  console.log(import.meta.env);
  
  const map = signal<null | L.Map>(null);
  useEffect(() => {
    map.value = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer(import.meta.env.VITE_MAP_URL, {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map.value);
    return () => {
      if (map.value) {
        map.value.remove();
      }
    };
  }, []);
  return (
    <div className="flex flex-col max-h-full h-screen w-screen ">
      <h1 className="">map </h1>
      <div id="map" className="flex-1 h-full"></div>
    </div>
  );
}
