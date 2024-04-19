import { createContext, useContext, useState } from 'react';

const DrawerContext = createContext();

export const DrawerProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    const handleToggleDrawer = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <DrawerContext.Provider value={{ open, handleToggleDrawer }}>
            {children}
        </DrawerContext.Provider>
    );
};

export const useDrawer = () => {
    return useContext(DrawerContext);
};
