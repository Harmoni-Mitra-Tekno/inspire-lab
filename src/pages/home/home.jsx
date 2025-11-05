import Headline from "./sections/headline.jsx";
import Description from "./sections/description.jsx";
import Members from "./sections/members.jsx";
import Info from "./sections/info.jsx";
import Research from "./sections/research.jsx";
import Publications from "./sections/publications.jsx";
import FindUs from "./sections/findUs.jsx";

function Home() {
    return (
        <div className="flex left-0 w-full flex-col">
            <Headline/>
            <Description/>
            <Info/>
            <Members/>
            <Research/>
            <Publications/>
            <FindUs/>
        </div>
    );
}
export default Home;