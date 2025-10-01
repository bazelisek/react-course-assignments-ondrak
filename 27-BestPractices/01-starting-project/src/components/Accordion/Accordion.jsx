import { createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

const AccordionContext = createContext();

export function useAccordionContext() {
    const ctx = useContext(AccordionContext);

    if (!ctx) {
        throw new Error("'Accordion' component must be wrapped around the accordion elements.");
    }
    return ctx;
}

export default function Accordion({children, className}) {
    const [openId, setOpenId] = useState(null);
    function toggleItem(id) {
        setOpenId(prevId => {
            if (prevId === id){
                return null;
            }
            return id;
        });
    }
    const contextValue = {
        openItemId: openId,
        toggleItem,
    }

    return(
        <AccordionContext.Provider value={contextValue}>
            <ul className={className}>
                {children}
            </ul>
        </AccordionContext.Provider>
    )
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;