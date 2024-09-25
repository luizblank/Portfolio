import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [background2Status, setBackground2Status] = useState(false);
    const [background3Status, setBackground3Status] = useState(false);

    const contextValue = {
        background2Status,
        setBackground2Status,
        background3Status,
        setBackground3Status
    };

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};