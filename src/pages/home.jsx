import { Card } from "flowbite-react";
import Aurora from "../components/animations/aurora";
import ChromaGrid from "../components/animations/chromaGrid";
import ScrollReveal from "../components/animations/scrollReveal";
import SpotlightCard from "../components/animations/spotlightCard";
import TextType from "../components/animations/textType";
import Threads from "../components/animations/threads";
import { motion } from "framer-motion";
import ScrollFloat from "../components/animations/scrollFloat";
import CircularGallery from "../components/animations/circuralGallery.jsx";
import Map from "../components/map.jsx";
import AnimatedList from "../components/animations/animatedList.jsx";
// import megiProfile from "../../assets/megi-profile.jpeg"
// import fadhlanProfile from "../../assets/fadhlan-profile.jpeg"
// import nillaProfile from "../../assets/nilla-profile.jpeg"
// import dataEncryptionImage from "../../assets/data-encryption.png"
// import medicalTechnologyImage from "../../assets/medical-technology.png"
// import signalProcessingImage from "../../assets/signal-processing.png"

const items = [
  {
    image: "/megi-profile.jpeg",
    title: "Griffani Megiyanto Rahmatullah",
    subtitle: "Researcher",
    gradient: "linear-gradient(180deg, #0926f4, #0a0a0a)",
    url: "https://www.linkedin.com/in/griffani-megiyanto-rahmatullah-258224145/"
  },
  {
    image: "/fadhlan-profile.jpeg",
    title: "Muhammad Yusuf Fadhlan",
    subtitle: "Researcher",
    gradient: "linear-gradient(180deg, #0926f4, #0a0a0a)",
    url: "https://www.linkedin.com/in/myfadhlan/"
  },
  {
    image: "/nilla-profile.jpeg",
    title: "Nila Novita Sari",
    subtitle: "Researcher",
    gradient: "linear-gradient(180deg, #0926f4, #0a0a0a)",
    url: "https://www.linkedin.com/in/nila-novita-sari-573b28133"
  }
];

const researchItems = [
      { image: `/data-encryption.png`, text: '' },
      { image:`/medical-technology.png`, text: '' },
      { image: `/signal-processing.png`, text: '' },
];

const publicationItems = [
    'Sari, N. N., Gani, M. N., Yusuf, R. M., & Firmando, R. (2021). Telemedicine for silent hypoxia: Improving the reliability and accuracy of Max30100-based system. Indonesian Journal of Electrical Engineering and Computer Science, 22(3), 1419-1426.', 
    'Adi, G. S., Nugroho, H., Rahmatullah, G. M., Yusuf, M., & Fadhlan, D. M. (2024). Fusion algorithms on identifying vacant parking spots using vision-based approach. Indonesian Journal of Electrical Engineering and Computer Science, 36(3), 1640-1654.', 
    'Rahmatullah, G. M., Ruan, S. J., & Li, L. P. H. (2025). Visual Speech Recognition using Attention-Enhanced ResNet and Hybrid Recurrent-Transformer Encoder with Quantity-ratio Curriculum Learning for Low-Resource Languages. Neurocomputing, 131303.', 
    'Nugroho, H., Hanafiah, U. B., Madiawati, H., Irfan, T., Satria, F., Hanifatunnisa, R., & Sari, N. N. (2023). Training on CCTV Use and Maintenance at SLB Purnama Asih. REKA ELKOMIKA: Jurnal Pengabdian kepada Masyarakat, 4(3), 223-231.', 
    'Fadhlan, M. Y., Rahmawati, A., & Anggreini, N. L. (2024). SYSTEM DESIGN FOR CALCUALTING THE NUMBER AND DENSITY OF MOTORCYCLES IN PARKING AREA BASED ON BACKGROUND SUBTRACTION METHOD. Jurnal Media Elektrik, 21(2), 98-104.', 
    "Explore the full breadth of this scholar's work. See their complete publication list, citation metrics, and research contributions directly on their Google Scholar profile."]; 

function Home() {
    const headline = "Discover the Inspirational Research at Intelligent Signal Processing Research Laboratory";
    const headlineWords = headline.split(" "); // Splitting the sentence into words
    return (
        <div className="flex left-0 w-full flex-col">
            <div className="h-[800px]">
                <div className="flex flex-col top-[380px] absolute h-fit z-0 text-center w-full px-5 gap-15">
                    <div className="w-full flex flex-row justify-center items-center gap-10">
                        <div className="text-center">
                            {headlineWords.map((word, index) => (
                                <motion.p
                                    initial={{opacity: 0, y: 12 }}
                                    animate={{opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.15 * index }}
                                    key={index}
                                    className="text-6xl font-medium inline-block mr-1.5"
                                >
                                    {word}
                                </motion.p>
                            ))}
                        </div>
                    </div>
                    <div className="w-full justify-center">
                        <TextType 
                        className="text-left text-3xl font-light text-[#FCA311]"
                        text={["Gain Insight and Drive Innovation with Intelligent Signal Processing"]}
                        typingSpeed={20}
                        deletingSpeed={20}
                        pauseDuration={3000}
                        textColors={["#E5E5E5"]}
                        cursorCharacter="_"/>
                    </div>
                </div>
                <Aurora
                    className='w-full'
                    colorStops={["#0926f4", "#0926f4", "#0926f4", "#1A5799", "#93bfef", "#1A5799",]}
                    blend={0.5}
                    amplitude={0.75}
                    speed={1}
                />
            </div>
            <div className="px-20 py-20">
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={3}
                    blurStrength={10}
                >
                    We are the core engine for advanced information technology. INSPIRE centers on exploiting novel signal processing theory, advanced statistical modeling, and machine intelligence to solve critical challenges in video big data analytics, speech understanding, and complex human-machine interaction.
                </ScrollReveal>
            </div>
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
            <div className="py-20 flex flex-col gap-5">
                <div className="text-6xl font-semibold flex justify-center items-center">
                    Current Research Domains and Scope
                </div>
                <div style={{ height: '600px', position: 'relative' }}>
                    <CircularGallery items= {researchItems} bend={5} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
                </div>
            </div>
            
            <div className="py-20 px-40 flex flex-row gap-10 justify-center items-center w-full">
                
                <div className="text-6xl font-semibold flex justify-center items-center">
                    Our Latest Publications
                </div>
                <AnimatedList
                    items={publicationItems}
                    onItemSelect={(item, index) => console.log(item, index)}
                    showGradients={true}
                    enableArrowNavigation={true}
                    displayScrollbar={true}
                    className=''
                />
            </div>
            <div className="w-full flex justify-center items-center flex-col my-24 gap-14">
                <h1 className="text-4xl font-semibold">Find Us on the Map</h1>
                <div className="w-3/4 h-150">
                    <Map className="h-full" markerPosition={[-6.871412028179578, 107.57344161531171]}/>
                </div>
            </div>
        </div>
        
    );
}
export default Home;