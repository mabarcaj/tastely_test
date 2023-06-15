import { FoodTrackTableHeader } from "./FoodTrackTableHeader";
import { FoodTrackTableContent } from "./FoodTrackTableContent";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { getAllFoodTracks } from "../api/foodtracks.api";
import { FilterIcon } from "./FilterIcon";

export function FoodTrackTable() {
    const [foodTracks, setFoodTracks] = useState([]);
    const [order, setOrder] = useState("ASC");

    // queda pendiente el sort por rating y visited
    // toast se repetía para algunas columnas
    const sortByCol = (col) => {
        if (col != "rating" || col != "visited") {
            if (order === "ASC") {
                const sorted = [...foodTracks].sort((a, b) =>
                    a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
                );
                setFoodTracks(sorted);
                setOrder("DESC");
            }
            if (order === "DESC") {
                const sorted = [...foodTracks].sort((a, b) =>
                    a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
                );
                setFoodTracks(sorted);
                setOrder("ASC");
            }
        }
        if (col === "rating" || col === "visited") {
            if (order === "ASC") {
                const sorted = [...foodTracks].sort((a, b) => a[col] > b[col]);
                setFoodTracks(sorted);
                setOrder("DESC");
            }
            if (order === "DESC") {
                const sorted = [...foodTracks].sort((a, b) => a[col] < b[col]);
                setFoodTracks(sorted);
                setOrder("ASC");
            }
        }
    };

    useEffect(() => {
        async function loadFoodTracks() {
            const res = await getAllFoodTracks();
            console.log(res.data);

            setFoodTracks(res.data);
        }
        loadFoodTracks();
    }, []);
    return (
        <table className="w-full ">
            {/** divide-x pareciera no funcionar | buscar forma */}
            <thead className="bg-gray-50 border-b-2 border-gray-200  uppercase text-bold">
                <FoodTrackTableHeader />
            </thead>
            <tbody className="divide-y divide-gray-100">
                {foodTracks.map((ft) => (
                    <FoodTrackTableContent key={ft.id} foodtrack={ft} />
                ))}
            </tbody>
        </table>
    );
}
