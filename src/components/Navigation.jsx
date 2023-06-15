import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <div className="flex justify-between py-3 font-delius-swash-caps">
            <Link to="/">
                <h1 className="font-bold text-3xl mb-4">Tastely</h1>
            </Link>
            <button className="bg-indigo-500 px-3 py-2 rounded-lg text-white">
                <Link to="/add-tracking">Añadir FoodTrack</Link>
            </button>
        </div>
    );
}
