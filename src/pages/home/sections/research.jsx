import CircularGallery from "../../../components/animations/circuralGallery.jsx";
import ResearchData from "../../../datas/researchData";

function Research(){
    const items = ResearchData()
    return(
        <div className="py-20 flex flex-col gap-5">
            <div className="text-6xl font-semibold flex justify-center items-center">
                Current Research Domains and Scope
            </div>
            <div style={{ height: '600px', position: 'relative' }}>
                <CircularGallery items= {items} bend={5} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
            </div>
        </div>
    )
}

export default Research