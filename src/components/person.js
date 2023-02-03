const Person=(props)=>{


    const cars=props.people;

return(

    <>
    {(cars.length)>0?

        cars.map((a)=>{
           return <div>
        <p>{a.name} {a.surname}</p>
        <p>{a.age}</p>
        <p>{a.job}</p>
        </div>
        })
        :

        <p>Kişi bulunamadı</p>

    }
    
    </>
);


}


export default Person;