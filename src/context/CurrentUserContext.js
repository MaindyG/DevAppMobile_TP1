import React, { createContext, useState, useMemo, useCallback } from "react";

export const CurrentUserContext = createContext({ user: null, setCurrentUser: () => {}});

export function CurrentUserProvider({ children }){
    const [user, setUser] = useState(null);

    const setCurrentUser = useCallback((newUser) => {
        setUser((newUser));
    }, [user]);

    const value = useMemo(() => ({ user, setCurrentUser }), [user, setCurrentUser]);

    return (
        <CurrentUserContext.Provider value={value}>
        {children}
        </CurrentUserContext.Provider>
    )
}