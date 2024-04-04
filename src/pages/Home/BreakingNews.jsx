import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">BREAKING NEWS</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12" to="/">Match Highlights: Germone vs Spain - as it happened !</Link>
                <Link className="mr-12" to="/">Match Highlights: Germone vs Spain - as it happened !</Link>
                <Link className="mr-12" to="/">Match Highlights: Germone vs Spain - as it happened !</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;