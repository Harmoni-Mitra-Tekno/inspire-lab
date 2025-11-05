import Map from "../../../components/map.jsx";

function FindUs(){
    return(
        <div className="w-full flex justify-center items-center flex-col gap-14">
            <h1 className="text-4xl font-semibold">Find Us on the Map</h1>
            <div className="w-3/4 h-125">
                <Map className="h-full" markerPosition={[-6.871412028179578, 107.57344161531171]}/>
            </div>
        </div>
    )
}

export default FindUs