import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constants";


const GptSearch=()=>{
    return(
       <div>
       <div className="fixed -z-10">
<img className="h-screen object-cover w-screen" src={BG_IMG}/>

  </div>
<div className="pt-[30%] md:p-0">
            <GptSearchBar/>
            <GptMovieSuggestions/>
           
        </div> 
       </div> 
          

    )
}

export default GptSearch;