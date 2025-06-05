import React from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null);
    //const [d,setd]=React.useState(null);
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;