import React from "react"
import PreviousArtworks from "../components/PreviousArtworks";
import { Data } from "../Data";
const Gallery = (props) => {
  return (
    <div className="flex min-h-screen flex-col gap-4 items-center bg-slate-300">
       <div className="mt-10">
       <h1 className="text-3xl font-bold text-white">Below are artworks artists have created:</h1>
       </div>
      <PreviousArtworks Data={Data}/>

      
    </div>
  )
};

export default Gallery;
