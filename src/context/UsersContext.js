import React, { createContext, useState, useMemo, useCallback } from "react";

export const UsersContext = createContext({ users: new Map(), addAUser: () => {}});

export function UsersProvider({ children }){
    const [users, addUser] = useState((new Map()));
    
    const addAUser = useCallback((key,value) => {
        addUser(prev => {prev.set(key,value)
            return new Map(prev);
        });
    }, [users,addUser]);

    const value = useMemo(() => ({ users, addAUser }), [users, addAUser]);

    return (
        <UsersContext.Provider value={value}>
        {children}
        </UsersContext.Provider>
    )
}