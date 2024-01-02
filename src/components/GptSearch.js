import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constants";
const GptSearch=()=>{
    return(
        <div >
<div className="fixed -z-10">

<img  src={BG_IMG}/>
</div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    )
}

export default GptSearch;