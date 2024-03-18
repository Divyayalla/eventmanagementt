import { useEffect } from "react";
function Logout(){
    useEffect(()=>{
        localStorage.clear();
        alert("successfully logged out")
        window.location.href='/login'
    })
}
export default Logout;