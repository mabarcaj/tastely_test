import { useNavigate } from "react-router-dom";
import { VisitedSpan } from "./VisitedSpan";
import { NonVisitedSpan } from "./NonVisitedSpan";

export function FoodTrackTableContent({ foodtrack }) {
    const navigate = useNavigate();
    {
        /*
    className="bg-[#99B2DD] p-3 hover:bg-[#99B2FF] hover:underline"
    */
    }
    return (
        <tr
            className="bg-[#99B2DD] p-3 hover:bg-[#99B2FF] hover:underline "
            onClick={() => {
                navigate(`foodtracks/${foodtrack.id}`);
            }}
        >
            <td className="p-3 text-sm text-gray-600 whitespace-nowrap text-center">
                {foodtrack.siteName}
            </td>
            <td className="p-3 text-sm text-gray-600 whitespace-nowrap text-center">
                {foodtrack.address}
            </td>
            <td className="p-3 text-sm text-gray-600 whitespace-nowrap text-center">
                {foodtrack.foodType}
            </td>
            <td className="w-20 p-3 text-sm text-gray-600 whitespace-nowrap text-center">
                {/**Falta asegurar que rating sea de 1 a 5 */}
                {foodtrack.rating ? foodtrack.rating + " / 5 " : "-----"}
            </td>
            <td className="w-24 p-3 text-sm text-gray-600 whitespace-nowrap text-center">
                {foodtrack.visited ? <VisitedSpan /> : <NonVisitedSpan />}
            </td>

            {/**
                 <td className="w-24 p-3 text-sm text-gray-600 whitespace-nowrap text-center">
                {String(foodtrack.visitedAt)}
            </td>
            <td className="w-24 p-3 text-sm text-gray-600 whitespace-nowrap text-center">
                {String(foodtrack.ratedAt)}
            </td>
                 */}
        </tr>
    );
}
