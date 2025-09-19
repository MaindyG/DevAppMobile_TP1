import { useState, useCallback, use } from "react";

export function addUserToList(initial = []) {
    const [users, setUsers] = useState(initial);

    const addUser = useCallback((newUser) => setUsers(c => [...c,{...newUser}]), []);

    return { users, addUser };
}