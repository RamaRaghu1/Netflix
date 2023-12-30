import { useState } from "react";
import Header from "./Header";

const Login=()=>{
    const [isSignInForm,setIsSignInForm]=useState(true);

    const toggleSignInForm=()=>{
setIsSignInForm(!isSignInForm)
    }

    return(
<div>
    <Header/>
    <div className="absolute">

    <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
    </div>
    <form className="w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
       <h1 className="font-bold text-3xl p-4">{isSignInForm ? "Sign In":"Sign Up"}</h1>
       {!isSignInForm && ( <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>)}
      
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
    <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-slate-700"/>
    <button className="p-4 my-4 w-full bg-red-600">{isSignInForm ? "Sign In":"Sign Up"}</button>
    <p className="p-2 my-4  cursor-pointer"  onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Already registered? Sign In Now "}</p>
    </form>
</div>

    )
}
export default Login;