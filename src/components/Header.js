import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, PHOTO_URL } from "../utils/constants";

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
   const unsubscribe = onAuthStateChanged(auth, (user) => {
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

      return()=>unsubscribe();
},[])

    return(
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between flex-col md:flex-row">
          <img className=" w-44"  alt="logo" src={LOGO}/>

         {user && (
           <div className="flex justify-end w-10 h-9 m-3 cursor-pointer">
           <img src={PHOTO_URL} alt="usericon"/>
           <button className="bg-red-400" onClick={handleSignOut}>(sign out)</button>
         </div>
         )}
        </div>
    )
}

export default Header;

