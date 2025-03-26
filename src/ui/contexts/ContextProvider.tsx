import { createContext, useContext, useState, ReactNode } from "react";

interface ActiveMenuState {
    chat: boolean;
    userProfile: boolean;
    notification: boolean;
}

interface ActiveMenuContextType {
    activeMenu: ActiveMenuState;
    setActiveMenu: React.Dispatch<React.SetStateAction<ActiveMenuState>>;
}

const ActiveMenuContext = createContext<ActiveMenuContextType | undefined>(undefined);

const initialState: ActiveMenuState = {
    chat: false,
    userProfile: false,
    notification: false,
};

interface ContextProviderProps {
    children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState<ActiveMenuState>(initialState);

    return (
        <ActiveMenuContext.Provider value={{ activeMenu, setActiveMenu }}>
            {children}
        </ActiveMenuContext.Provider>
    );
};

// Custom hook for using the context
export const useActiveMenuContext = (): ActiveMenuContextType => {
    const context = useContext(ActiveMenuContext);
    if (!context) {
        throw new Error("useActiveMenuContext must be used within a ContextProvider");
    }
    return context;
};