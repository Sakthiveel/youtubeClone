import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('music');
    const [currentVideoDetail,setCurrentVideoDetail] = useState(null);

    const setSearchTermFunc = (term) => {
        setSearchTerm(term);
    }



    return (
        <Context.Provider value={{ setSearchTermFunc, searchTerm,setSearchTerm ,currentVideoDetail,setCurrentVideoDetail }}>
            {children}
        </Context.Provider>
    );
};