import { useState, useCallback } from "react";

export function addUserToList(initial = []) {
    const [users, setUsers] = useState(initial);

    const addUser = useCallback((newUser) => setUsers(c => [...c,{...newUser}]), []);

     const updateUser = useCallback(
        (updatedUser) => {
            setUsers(prevUsers =>
                prevUsers.map(user => (user.id === updatedUser.id ? updatedUser : user))
            );
        },
        []
    );

    return { users, addUser, updateUser };
}