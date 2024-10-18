import React from "react"
import { ReactSketchCanvas} from "react-sketch-canvas";
import { useState ,useRef} from "react";
import PreviousArtworks from "./PreviousArtworks";
import { Data } from "../Data";
import toast from "react-hot-toast";

const Main = (props) => {
  const [prompt,setPrompt]=useState("");
  const changeHandler=(event)=>{
      setPrompt(event.target.value);
      console.log(prompt);
  }
  const submitHandler=(event)=>{
    event.preventDefault();
  }

  const canvasRef = useRef(null);
  const handleClear = () => {
    // Clear the canvas using the clearCanvas method
    canvasRef.current.clearCanvas();
    setPrompt("");
    
  };


  

   

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-2 sm:p-6 pt-6 bg-gradient-to-b from-purple-600 to-blue-900">
        <div className="container mx-auto flex  justify-around  ">
          <form
            className="flex flex-col gap-2 w-full md:w-1/2 lg:w-1/3 2xl:w-1/4"
          onSubmit={submitHandler}
          >
            <label htmlFor="prompt" className="text-xl text-white">
              Prompt
            </label>
            <input
              id="prompt"
              className="border-white rounded-md px-2 py-2 bg-transparent text-white border focus:outline-none"
              value={prompt}
              name="prompt"
              onChange={changeHandler}
            />


            <label htmlFor="canvas" className="mt-3 text-xl text-white">
              Canvas (Scribble below)
            </label>
            <ReactSketchCanvas
              id="canvas"
              ref={canvasRef}
              strokeWidth={4}
              style={{ height: 350 }}
              strokeColor="black"
              className="cursor-cell "
            />
            <button className="bg-purple-700 rounded cursor-pointer py-2 px-3 text-white font-semibold transition-transform duration-300 hover:scale-110" onClick={()=>{
              toast.success("ART GENERATED SUCCESSFULLY...")
            }}>
              Submit
            </button>
            <div
              type="button"
              className=" text-center bg-blue-600 rounded cursor-pointer py-2 px-3 text-white font-semibold mt-3 transition-transform duration-300 hover:scale-110"
              
              onClick={handleClear}
            >
              Clear
            </div>
          </form>
     
          <section className="max-w-[1000px] ">
              <h1 className="text-2xl text-center font-semibold text-white">Previous Artworks</h1>
              <PreviousArtworks   Data={Data.slice(0,4)}/>

          </section>

        </div>
      </main>
    </div>
  )
};

export default Main;
 