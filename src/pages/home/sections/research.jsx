import CircularGallery from "../../../components/animations/circuralGallery.jsx";
import ResearchData from "../../../datas/researchData";

function Research(){
    const items = ResearchData()
    return(
        <div className="py-10 md:py-20 flex flex-col gap-4 lg:gap-10">
            <div className="px-10 md:px-20 text-3xl md:text-6xl font-semibold flex justify-center items-center">
                Current Research Domains and Scope
            </div>
            <div className="hidden lg:flex" style={{ height: '600px', position: 'relative' }}>
                <CircularGallery items= {items} bend={5} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
            </div>
            <div className="flex lg:hidden flex-col gap-10 justify-center items-center">
                {items.map(item => {
                    return(
                        <img src={item.image} loading="lazy" className="w-[300px] md:w-[500px] rounded-[10px]">
                        </img>
                    );
                })}
            </div>
        </div>
    )
}

export default Research