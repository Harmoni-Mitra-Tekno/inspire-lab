import AnimatedList from "../../../components/animations/animatedList.jsx";
import PublicationData from "../../../datas/publicationData.jsx";

function Publications(){
    const items = PublicationData()
    return(
        <div className="py-10 md:py-20 lg:px-40 flex flex-col lg:flex-row gap-4 lg:gap-10 justify-center items-center w-full">  
            <div className="px-10 lg:px-0 text-3xl md:text-6xl font-semibold flex justify-center items-center text-center md:text-left">
                Our Latest Publications
            </div>
            <AnimatedList
                items={items}
                onItemSelect={(item, index) => console.log(item, index)}
                showGradients={true}
                enableArrowNavigation={true}
                displayScrollbar={true}
                className=''
            />
        </div>
    )
}

export default Publications