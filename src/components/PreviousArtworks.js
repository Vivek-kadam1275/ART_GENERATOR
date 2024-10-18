import React from "react"
 

const PreviousArtworks = (props) => {
   
   const Data=props.Data;
    
  return (
    <div className="flex  flex-wrap justify-center gap-8 w-10/12 mx-auto">
      {Data.map((item,key)=>{
        return (<img src={item.src} alt={item.src} width={400} height={400} key={item.id}/>)
      })}
    </div>
  )
};

export default PreviousArtworks;
