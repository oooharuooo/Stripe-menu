import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [toggleNavBar, setToggleNavBar] = useState(false)
    const [toggleSubmenu, setToggleSubmenu] = useState(false)
    const [page,setPage] = useState({page:"",links:[]})
    
    const openNavBar = () => {
        setToggleNavBar(true)
    }
    const closeNavBar = () => {
        setToggleNavBar(false)
    }

    const openSubmenu = (text) => {
        const samePage = sublinks.find(sub => sub.page === text)
        console.log(samePage)
        setPage(samePage)
			setToggleSubmenu(true);
    };
    
		const closeSubmenu = () => {
			setToggleSubmenu(false);
		};

    return (
        <AppContext.Provider
            value={{
                toggleNavBar,
                toggleSubmenu,
                openNavBar,
                closeNavBar,
                openSubmenu,
                closeSubmenu,
                sublinks,
                page,
            }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };