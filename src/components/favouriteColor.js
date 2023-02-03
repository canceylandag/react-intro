import { useState } from "react";

const FavouriteColor=()=>{

    const [color,setColor]=useState("red");

    return(<>
    <div style={{background:color}}>
    <h1>My Favoutite Color is {color}</h1>
    </div>
    
    
    <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    
    </>)


}

export default FavouriteColor;