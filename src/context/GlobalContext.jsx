import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [background2Status, setBackground2Status] = useState(false);
    const [background3Status, setBackground3Status] = useState(false);
    const [leavingConveyor, setLeavingConveyor] = useState(false);
    const [marcosAnimation, setMarcosAnimation] = useState(false);
    const [showWinners, setShowWinners] = useState(false);

    const contextValue = {
        background2Status,
        setBackground2Status,
        background3Status,
        setBackground3Status,
        leavingConveyor,
        setLeavingConveyor,
        marcosAnimation,
        setMarcosAnimation,
        showWinners,
        setShowWinners
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