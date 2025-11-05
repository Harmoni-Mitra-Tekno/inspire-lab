import AnimatedList from "../../../components/animations/animatedList.jsx";
import PublicationData from "../../../datas/publicationData.jsx";

function Publications(){
    const items = PublicationData()
    return(
        <div className="py-20 px-40 flex flex-row gap-10 justify-center items-center w-full">  
            <div className="text-6xl font-semibold flex justify-center items-center">
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