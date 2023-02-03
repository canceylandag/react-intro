import Card from "../components/card";

import Garage from "../components/garage";
import MyCar from "../components/myCar";
import Person from "../components/person";

const Home=()=> {

  const products = [
    { title: "Ürün 1", desc: "Ürün Açıklama 1", price: "1000TL", img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { title: "Ürün 2", desc: "Ürün Açıklama 2", price: "2000TL", img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { title: "Ürün 3", desc: "Ürün Açıklama 3", price: "3000TL", img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { title: "Ürün 4", desc: "Ürün Açıklama 4", price: "4000TL", img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
  ];

  const products2 = [
    { brand: "Ürün 1", model: "Ürün Açıklama 1", price: "1000TL" },
    { brand: "Ürün 2", model: "Ürün Açıklama 2", price: "2000TL" },
    { brand: "Ürün 3", model: "Ürün Açıklama 3", price: "3000TL" },
    { brand: "Ürün 4", model: "Ürün Açıklama 4", price: "4000TL" }
  ];

  const products3 = [
    { name: "Hakan", surname:"sdfsdf", age:25, job: "Doktor" },
    { name: "Can", surname:"sdfhjgj", age: 17, job: "Mühendis" },
    { name: "Mert", surname:"hgjbvn", age: 28, job: "Avukat" },
    { name: "Selin", surname:"tyutyuuy", age: 55, job: "Emekli" }
  ];

  const carArr=["Ford","Mercedes","Audi"];

  return (
    <div className="Home">
      
    <div style={{ display: "flex", gap: "12px",color:"green" }}>
       {
        products.map((product)=>(
          <Card details={product}/>
        ))
       }

      </div> 
      <div style={{ display: "flex", gap: "12px",color:"purple" }}>
       {
        products2.map((product)=>(
          <MyCar item={product}/>
        ))
       }

      </div> 
      <div style={{ display: "flex", gap: "12px",color:"purple" }}>
        <h1>Garajım</h1>
       {
        <Garage cars={products2}/>
       }

      </div> 
      <div style={{ display: "flex", gap: "12px",color:"purple" }}>
        <h1>Kişiler</h1>
       {
        <Person people={products3}/>
       }

      </div> 


    </div>
  );
}

export default Home;
