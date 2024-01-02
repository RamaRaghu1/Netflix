export const LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const PHOTO_URL="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg";
export const BG_IMG="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
export const API_OPTIONS= {
  
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2E2MjMyNWY1YzQ1OTZiYTVlMjI4NDZlZjY1NWNmMyIsInN1YiI6IjYyZDNhMzhhMmQxZTQwMDA2MGRmYzNiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pdH_MbTtdcQmPwQG6neNTg__omzrJ-wLtE1hjNbUmhg'
        }
      
}


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";


export const SUPPORTED_LANGUAGES=[{identifier: "en", name: "English" },{identifier:"tamil",name:"Tamil"},
{ identifier: "hindi", name: "Hindi" },
{ identifier: "spanish", name: "Spanish" },
]

export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;