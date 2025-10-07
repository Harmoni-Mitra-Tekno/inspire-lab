import { useState } from "react";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

const AccordionComponent = ({
    contents
}) => {
    return(
            <Accordion collapseAll>
                {contents.map(content => {
                    return(
                        <AccordionPanel className="border-2">
                            <AccordionTitle className="font-bold text-4xl cursor-pointer">
                                {content.header}
                            </AccordionTitle>
                            <AccordionContent className="text-xl">
                                {content.body}
                            </AccordionContent>
                        </AccordionPanel>
                    )
                })}
                
            </Accordion>
    )
}

export default AccordionComponent