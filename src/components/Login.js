import { useState } from "react";
import Header from "./Header";
import { useRef } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";


const Login=()=>{
    const [isSignInForm,setIsSignInForm]=useState(true);
    const[errorMessage, setErrorMessage]=useState(null);

    const email=useRef(null);
    const password=useRef(null);


    const handleButtonClick=()=>{
        // validate the form data
        // checkValidData(email,password)
        console.log(email.current.value);
        console.log(password.current.value);


        const message=checkValidData(email.current.value, password.current.value);
        setErrorMessage(message)


      if(message)return;
      
    //   signIn / signUp
    if(!isSignInForm){
        // signUp logic
        createUserWithEmailAndPassword(email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-"+errorMessage)
          // ..
        });

    }else{
// login logic
signInWithEmailAndPassword(email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-"+errorMessage)
  });

    }
    }
    const toggleSignInForm=()=>{
setIsSignInForm(!isSignInForm)
    }

    return(
<div>
    <Header/>
    <div className="absolute">

    <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
    </div>
    <form 
    onSubmit={(e)=>e.preventDefault()}
    className="w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
       <h1 className="font-bold text-3xl p-4">{isSignInForm ? "Sign In":"Sign Up"}</h1>
       {!isSignInForm && ( <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>)}
      
        <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
    <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-slate-700"/>
    <p className="font-bold text-red-700">{errorMessage}</p>
    {!isSignInForm && (
          <p className="text-gray-400 text-[11px] mb-3">
            Password should be at least 8 characters long with at least 1
            uppercase letter, 1 lowercase letter, 1 number, and 1 special char.
          </p>
        )}
    <button className="p-4 my-4 w-full bg-red-600" onClick={handleButtonClick}>{isSignInForm ? "Sign In":"Sign Up"}</button>
    <p className="p-2 my-4  cursor-pointer"  onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Already registered? Sign In Now "}</p>
    </form>
</div>

    )
}
export default Login;