import ScrollReveal from "../../../components/animations/scrollReveal.jsx";

function Description(){
    return(
        <div className="px-10 md:px-20 py-10 md:py-0">
            <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={10}
                blurStrength={10}
            >
                We are the core engine for advanced information technology. INSPIRE centers on exploiting novel signal processing theory, advanced statistical modeling, and machine intelligence to solve critical challenges in video big data analytics, speech understanding, and complex human-machine interaction.
            </ScrollReveal>
        </div>
    )
}

export default Description