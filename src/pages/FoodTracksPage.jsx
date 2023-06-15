import { FiltersNav } from "../components/FiltersNav";
import { FoodTrackTable } from "../components/FoodTrackTable";
import { useState } from "react";

export function FoodTracksPage() {
    const [data, setData] = useState([]);
    return (
        <div>
            <h1 className="font-delius-swash-caps text-5xl ml-10 mb-5 text-justify text-fuchsia-600 italic font-bold py-20">
                FoodTracks actuales:
            </h1>
            <div className="rounded-xl mx-5 relative overflow-x-auto  sm:rounded-xl">
                <FiltersNav />
            </div>
            <div className="rounded-xl mx-5 relative overflow-x-auto  sm:rounded-xl">
                <FoodTrackTable />
            </div>
            {/* Añadir luego una vista para dispositivos móviles (de momento no se mostrarán) */}
        </div>
    );
}
