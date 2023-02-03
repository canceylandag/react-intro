const Garage=(props)=>{


    const cars=props.cars;

return(

    <>
    {(cars.length)>0?

        cars.map((a)=>{
           return (<div>
        <p>{a.brand}</p>
        <p>{a.model}</p>
        <p>{a.price}</p>
        </div>
        )})
        :

        <p>Araç bulunamadı</p>

    }
    
    </>
);


}


export default Garage;