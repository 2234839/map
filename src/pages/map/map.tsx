import L from "leaflet";
import { useEffect } from "preact/hooks";
import { signal } from "@preact/signals";
import "leaflet/dist/leaflet.css";
export function Map() {
  console.log(import.meta.env);

  const map$ = signal<null | L.Map>(null);
  useEffect(() => {
    const map = L.map("map").setView(
      [
        Number(import.meta.env.VITE_DEFAULT_LAT),
        Number(import.meta.env.VITE_DEFAULT_LNG),
      ],
      15
    );
    map$.value = map;
    L.tileLayer(import.meta.env.VITE_MAP_URL, {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    var polygon = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047],
    ]).addTo(map);

    function onMapClick(e) {
      console.log(e);
    }

    map.on("click", onMapClick);
    return () => {
      if (map$.value) {
        map$.value.remove();
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
