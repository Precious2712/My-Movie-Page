import FooterPage from "@/footer";
import Partone from "../firstrow";
import Headings from "../headline";
import MadeInAfrica from "../secondrow";
import TrillersMovies from "../thirdrow";
import FooterPages from "../footer";

const AllfilmsPage = () => {
    return (
        <div className="bg-[rgb(24,24,24)] pt-16 pb-16">
            <Headings />
            <Partone />
            <MadeInAfrica />
            <TrillersMovies />
            <FooterPages />
        </div>
    )
};

export default AllfilmsPage