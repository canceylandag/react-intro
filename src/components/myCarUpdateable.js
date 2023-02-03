import { useState } from "react";

const MyCarUpdateable=()=>{
const _car={
    brand:"ford",
    model:"mustang",
    year:2022
}
const [car,setCar]=useState(_car)

return(

    <>
    <div>
        <p>{"My car's brand is "+ car.brand}</p>
        <p>{"My car's model is "+ car.model}</p>
        <p>{"My car's year is "+ car.year}</p>

        <div>
        <button onClick={()=>setCar({...car,brand:"ford",model:"focus",year:2018})}>
                Ford Focus yap
            </button>
            <button onClick={()=>setCar({...car,brand:"fiat",model:"egea",year:2019})}>
            Fiat Egea yap
            </button>
            
        </div>


    </div>
    
    </>
);


}


export default MyCarUpdateable;