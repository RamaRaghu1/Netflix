
import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer"


const VideoBackground=({movieId})=>{
    const trailerVideo=useSelector(store=> store.movies?.trailerVideo)
   useMovieTrailer(movieId);
    return(

       
        <div className="w-screen m-0">
<iframe 
className="w-screen aspect-video "
src={"https://www.youtube.com/embed/"+trailerVideo?.key +"?&autoplay=1&mute=1"} frameborder="0" title="YouTube video player" fullscreen></iframe>
        </div>
    )
}

export default VideoBackground;