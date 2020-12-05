import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [toggleNavBar, setToggleNavBar] = useState(false)
    
    const openNavBar = () => {
        setToggleNavBar(true)
    }
    const closeNavBar = () => {
        setToggleNavBar(false)
    }

    return (
        <AppContext.Provider value={{ toggleNavBar, openNavBar, closeNavBar,sublinks }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };