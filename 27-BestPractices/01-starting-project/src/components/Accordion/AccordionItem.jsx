import { createContext, useContext } from "react";

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
    const ctx = useContext(AccordionItemContext);
    if (!ctx) {
        throw new Error("Accordion content and title must be wrapped by 'Accordion.Item'")
    }
    return ctx;
}

export default function AccordionItem({ id, children, className }) {
    const accordionItemContextValue =  { id };
    return (
        <AccordionItemContext.Provider value={accordionItemContextValue}>
            <li className={className}>
                {children}
            </li>
        </AccordionItemContext.Provider>
    );
}
