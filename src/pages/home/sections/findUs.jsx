import Map from "../../../components/map.jsx";

function FindUs(){
    return(
        <div className="w-full flex justify-center items-center flex-col gap-10 md:gap-20">
            <h1 className="text-3xl md:text-6xl font-semibold">Find Us on the Map</h1>
            <div className="p-5 md:p-0 w-full md:w-3/4 h-[250px] md:h-[400px] lg:h-125">
                <Map className="h-full" markerPosition={[-6.871412028179578, 107.57344161531171]}/>
            </div>
        </div>
    )
}

export default FindUs