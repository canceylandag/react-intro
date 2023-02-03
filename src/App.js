import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NoPage from "./pages/NoPage"
import Layout from "./pages/Layout"
import PersonList from "./pages/PersonList";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const App=()=> {

  const personList=[{name:"Can Ceylandağ",age:"25",job:"Developer",salrary:17000,id:1},
                    {name:"dsfsdf gfhgfhgfh",age:"15",job:"Student",salrary:100,id:2},
                    {name:"yıyuıyuı vcbcvb",age:"56",job:"Lawyer",salrary:55000,id:3},
                    {name:"tyuyu nmbnm",age:"34",job:"Doctor",salrary:22000,id:4},]

  const[list,setList]=useState(personList);

  const[createOrUpdate,setCreateorUpdate]=useState(false);
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [opendelte, setOpenDelete] = React.useState(false);
  const handleOpen2 = () => setOpenDelete(true);
  const handleClose2 = () => setOpenDelete(false);

  const deletePerson=(input)=>{

    setList(list.filter(x=>x.id!=input));

  }
  const editPerson=(input,formval)=>{

    let objIndex = list.findIndex((x => x.id == input));
    list[objIndex]={name:formval.name,age:formval.age,job:formval.job,salrary:formval.salrary};
    
  }
  const createPerson=(input)=>{

    setList([...list,{name:input.name,age:input.age,job:input.job,salrary:input.salrary}]);

  }
  const openCreateUpdateModal=(input)=>{
    input?setCreateorUpdate(true):setCreateorUpdate(false);
    handleOpen();
  }
  const openDeleteModal=()=>{
    handleOpen2();
  }


  const crudObject={
    openCreateUpdateModal,openDeleteModal
  }
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="person-list" element={<PersonList list={list} functions={crudObject}/>} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  {/* Create Update Modal */}
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    {createOrUpdate?
    <button onClick={()=>editPerson()}>
    Güncelle
    </button>:
    <button onClick={()=>createPerson()}>
    Kaydet
    </button>
    }
            <button onClick={handleClose}>Hayır</button>
    </Typography>
  </Box>
</Modal>
{/* delete Modal */}
<Modal
        open={opendelte}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Veriyi Silmek istediğinizden emin misiniz?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <button onClick={()=>deletePerson()}>Evet</button>
            <button onClick={handleClose2}>Hayır</button>
          </Typography>
        </Box>
      </Modal>
  </div>
  
  );
}

export default App;
