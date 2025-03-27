import React, { createContext, useContext, useState, ReactNode } from 'react';

interface StateContextProps {
  currentMode: string;
  activeMenu: boolean;
  handleClick: (clicked: keyof InitialStateType) => void;
  isClicked: InitialStateType;
  initialState: InitialStateType;
  setIsClicked: React.Dispatch<React.SetStateAction<InitialStateType>>;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentMode: (mode: string) => void;
  setMode: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface InitialStateType {
  chat: boolean;
  userProfile: boolean;
  notification: boolean;
  activeMenu: boolean;
  search: boolean;
}

const initialState: InitialStateType = {
  chat: false,
  userProfile: false,
  notification: false,
  activeMenu: false,
  search: false,
};

const StateContext = createContext<StateContextProps | undefined>(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [currentMode, setCurrentMode] = useState<string>('Light');
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<InitialStateType>(initialState);

  const setMode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const handleClick = (clicked: keyof InitialStateType) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        currentMode,
        activeMenu,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentMode,
        setMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): StateContextProps => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useStateContext must be used within a ContextProvider');
  }
  return context;
};
