import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearchView } from "../utils/gptSlice";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, PHOTO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header=()=>{
  const dispatch=useDispatch();
const navigate=useNavigate();
const user=useSelector((store)=>store.user)
const showGptSearch= useSelector((store)=>store.gpt.showGptSearch)

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

const handleGptSearchClick = ()=>{
  // toggle GPT search
  dispatch(toggleGptSearchView());
}

const handleLanguageChange=(e)=>{
  dispatch(changeLanguage(e.target.value))
}

    return(
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between flex-col md:flex-row ">
          <img className=" w-44 mx-auto md:m-0"  alt="logo" src={LOGO}/>

         {user && (
          <div className="flex p-2 justify-between">
          {showGptSearch && (
              <select className="m-2 p-2 rounded-lg font-bold text-white bg-gray-900" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map(lang=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
               </select>
          )}
            <button className="py-2 px-4 mx-2 my-2 text-white font-bold bg-purple-500 rounded-lg" onClick={handleGptSearchClick}>

              {showGptSearch? "Homepage": "GPT Search"}
            </button>
            <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={PHOTO_URL}
          />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
         </div>
         
         )}
        </div>
    )
}

export default Header;

