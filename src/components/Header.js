import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";


const Header=()=>{
const navigate=useNavigate();
const user=useSelector((store)=>store.user)

  const handleSignOut=()=>{
    signOut(auth).then(() => {
    
      navigate("/")
    }).catch((error) => {
   
    });
  }
    return(
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-50 w-full flex justify-between">
          <img className=" w-44"  alt="logo" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>

         {user && (
           <div className="flex justify-end w-10 h-9 m-3 cursor-pointer">
           <img src={user.photoURL} alt="usericon"/>
           <button className="bg-red-400" onClick={handleSignOut}>(sign out)</button>
         </div>
         )}
        </div>
    )
}

export default Header;

// https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg