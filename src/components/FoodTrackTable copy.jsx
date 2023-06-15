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
            <thead className="bg-gray-50 border-b-2 border-gray-20 uppercase text-bold">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-center">
                        <div className="items-center grid grid-cols-3 gap-4">
                            <span className="col-span-2 text-center">
                                FoodTrack
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 border-2 border-sky-400 rounded-lg"
                                onClick={() => sortByCol("siteName")}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06L8.25 4.81V16.5a.75.75 0 01-1.5 0V4.81L3.53 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zm9.53 4.28a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V7.5a.75.75 0 01.75-.75z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </th>
                    <th
                        onClick={() => sortByCol("address")}
                        className="p-3 text-sm font-semibold tracking-wide text-center"
                    >
                        <div className="items-center grid grid-cols-3 gap-4">
                            <span className="col-span-2">Dirección</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 border-2 border-sky-400 rounded-lg"
                                onClick={() => sortByCol("address")}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06L8.25 4.81V16.5a.75.75 0 01-1.5 0V4.81L3.53 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zm9.53 4.28a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V7.5a.75.75 0 01.75-.75z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </th>
                    <th
                        onClick={() => sortByCol("foodType")}
                        className="p-3 text-sm font-semibold tracking-wide text-center"
                    >
                        <div className="items-center grid grid-cols-3 gap-4">
                            <span className="col-span-2">Menú</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 border-2 border-sky-400 rounded-lg"
                                onClick={() => sortByCol("siteName")}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06L8.25 4.81V16.5a.75.75 0 01-1.5 0V4.81L3.53 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zm9.53 4.28a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V7.5a.75.75 0 01.75-.75z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </th>
                    <th
                        onClick={() => sortByCol("rating")}
                        className="p-3 text-sm font-semibold tracking-wide text-center"
                    >
                        <div className="items-center grid grid-cols-3 gap-4">
                            <span className="col-span-2">Rating</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 border-2 border-sky-400 rounded-lg"
                                onClick={() => sortByCol("siteName")}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06L8.25 4.81V16.5a.75.75 0 01-1.5 0V4.81L3.53 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zm9.53 4.28a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V7.5a.75.75 0 01.75-.75z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </th>
                    <th
                        onClick={() => sortByCol("visited")}
                        className="p-3 text-sm font-semibold tracking-wide text-center"
                    >
                        <div className="items-center grid grid-cols-3 gap-4">
                            <span className="col-span-2">Status</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 border-2 border-sky-400 rounded-lg"
                                onClick={() => sortByCol("siteName")}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06L8.25 4.81V16.5a.75.75 0 01-1.5 0V4.81L3.53 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zm9.53 4.28a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V7.5a.75.75 0 01.75-.75z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                {foodTracks.map((ft) => (
                    <FoodTrackTableContent key={ft.id} foodtrack={ft} />
                ))}
            </tbody>
        </table>
    );
}
