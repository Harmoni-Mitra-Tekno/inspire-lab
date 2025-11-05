import SpotlightCard from "../../../components/animations/spotlightCard.jsx";

function Info(){
    return(
        <div className="px-20 py-20 flex flex-col gap-20 justify-center items-center">
            <div className="text-6xl font-semibold">
                Driving Innovation: What We Focus On
            </div>
            <div className="flex flex-row gap-5">
                <SpotlightCard className="w-1/3" spotlightColor="#0926f4">
                    <div className="flex flex-col gap-5">
                        <p className="text-3xl font-semibold">Advances in Audio, Visual, and Language Processing</p>
                        <p className="text-xl">Our research investigates image and video processing, as well as acoustic and speech processing. We also work on speech recognition and understanding, video big data analytics, motion tracking, and natural language understanding and generation.</p>
                    </div>
                </SpotlightCard>
                <SpotlightCard className="w-1/3" spotlightColor="#0926f4">
                    <div className="flex flex-col gap-5">
                        <p className="text-3xl font-semibold">Core Algorithms for Intelligent Systems</p>
                        <p className="text-xl">The INSPIRE team develops the core algorithms that power intelligent systems. We use a multi-faceted approach, combining advanced statistical modeling, cutting-edge signal processing theory, and machine intelligence techniques to meet the demands of a rapidly evolving information-technology landscape. Our extensive research is reflected in our many journal publications across diverse fields, including image and speech signal processing, data fusion, pattern recognition, and intelligent systems.</p>
                    </div>
                </SpotlightCard>
                <SpotlightCard className="w-1/3" spotlightColor="#0926f4">
                    <div className="flex flex-col gap-5">
                        <p className="text-3xl font-semibold">Building the Next Generation of Intelligent Surveillance</p>
                        <p className="text-xl">Our vision is to develop algorithms that enable seamless human-machine interaction and powerful video big data analytics. We're creating intelligent surveillance systems by integrating diverse technologies like image, acoustic, and speech processing, as well as motion tracking and natural language understanding and generation.</p>
                    </div>
                </SpotlightCard>
            </div>
        </div>
    )
}

export default Info