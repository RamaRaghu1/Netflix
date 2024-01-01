import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer=()=>{
    const movies = useSelector(store=> store.movies?.nowPlayingMovies)
   
    // early return: intially the movies will be null, so just to stop code from breaking a return statement is passed
    if(!movies) return;
   const mainMovie=movies[0]
   console.log(mainMovie)

   const {original_title, overview,id}=mainMovie;
    return(

       
        <div >
<VideoTitle title={original_title} overview={overview} movieId={id}/>
<VideoBackground movieId={id}/>

        </div>
    )
}

export default MainContainer;