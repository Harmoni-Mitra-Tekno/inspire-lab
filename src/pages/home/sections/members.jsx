import ChromaGrid from "../../../components/animations/chromaGrid.jsx";
import MemberData from "../../../datas/memberData"

function Members(){
    const items = MemberData()
    return(
        <div className="py-10 md:py-20 flex flex-col gap-10 md:gap-20 justify-center items-center">
            <div className="px-10 md:px-20 text-3xl md:text-6xl font-semibold">
                Meet The Members
            </div>
            <ChromaGrid
            className="bg-[#0a0a0a]"
                items={items}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.in"
            />
        </div>
    )
}

export default Members