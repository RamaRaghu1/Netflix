import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header=()=>{
  const dispatch=useDispatch();
const navigate=useNavigate();
const user=useSelector((store)=>store.user)

  const handleSignOut=()=>{
    signOut(auth).then(() => {
    
      
    }).catch((error) => {
   
    });
  }
// bug fixed useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email,displayName, photoURL} = user;
          // ...
          dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
          navigate("/browse");
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
          navigate("/");
        }
      });

},[])

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