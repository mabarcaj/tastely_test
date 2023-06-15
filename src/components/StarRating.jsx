import { EmptyStar } from "./EmptyStar";
import { Star } from "./Star";

export default function StarRating({ rating }) {
    // dummy
    const starArray = [];
    for (let i = 0; i < rating; i++) {
        console.log(i);
        starArray.push(<Star key={i} />);
    }
    const needed = 5 - starArray.length;
    console.log(`starArray Length : ${starArray.length}`);
    return <span className="grid grid-cols-5">{starArray}</span>;
}
