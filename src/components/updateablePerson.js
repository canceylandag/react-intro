import { useState } from "react";

const UpdateablePerson=()=>{
const _person={
   name:"Can",
   surname:"Ceyladağ"
}
const [person,setPerson]=useState(_person);
const [formPerson,setForm]=useState({
    name:"",
    surname:""
})


return(

    <>
    <div>
        <p>{"Kişinin Adı: "+ person.name}</p>
        <p>{"Kişinin Soyadı: "+ person.surname}</p>
        

        {
            <form>
                <label>Adı</label>
                <input  type={"text"} onKeyUp={(ev)=>setForm({...formPerson,name:ev.target.value})}/>
                <label>Soyadı</label>
                <input  type={"text"} onKeyUp={(ev)=>setForm({...formPerson,surname:ev.target.value})}/>
                <button onClick={()=>setPerson({...person,name:formPerson.name,surname:formPerson.surname})}>Değiştir</button>
            </form>
        }


    </div>
    
    </>
);


}


export default UpdateablePerson;