import ChromaGrid from "../../../components/animations/chromaGrid.jsx";
import MemberData from "../../../datas/memberData"

function Members(){
    const items = MemberData()
    return(
        <div className="py-20 flex flex-col gap-20 justify-center items-center">
            <div className="text-6xl font-semibold">
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