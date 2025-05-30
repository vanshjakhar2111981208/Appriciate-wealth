import { useContext } from "react"
import UserContext from "../context/UserContext"

function Profile() {
    const {user}=useContext(UserContext);
    if(!user) return <div>Please Login</div>
    return <div>Welcome {user.username} and the pass {user.password}and data {user.data}</div>
}

export default Profile