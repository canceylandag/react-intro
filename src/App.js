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
import CustomModal from "./components/modal";
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

const initialForm={
  name: "",
  surname: "",
  age: "",
  job: "",
  salary: ""
}

const App = () => {

  const personList = [{ name: "Can", surname: "Ceylandağ", age: "25", job: "Developer", salary: 17000, id: 1 },
  { name: "dsfsdf", surname: " gfhgfhgfh", age: "15", job: "Student", salary: 100, id: 2 },
  { name: "yıyuıyuı", surname: "vcbcvb", age: "56", job: "Lawyer", salary: 55000, id: 3 },
  { name: "tyuyu", surname: "nmbnm", age: "34", job: "Doctor", salary: 22000, id: 4 },]

  const [list, setList] = useState(personList);
  
  const [personForm, setPersonForm] = useState(initialForm);

  const [createOrUpdate, setCreateorUpdate] = useState(false);
  
  const [formSubmitted, setformSubmitted] = useState(false);

  const [selectedId, setSelectedId] = useState(0);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [opendelte, setOpenDelete] = React.useState(false);
  const handleOpen2 = () => setOpenDelete(true);
  const handleClose2 = () => setOpenDelete(false);

  const openCreateUpdateModal = (input) => {
    input ? setCreateorUpdate(true) : setCreateorUpdate(false);
    setSelectedId(input);
    if (input) {
      let objIndex = list.findIndex((x => x.id == selectedId));
      setPersonForm({ name: list[objIndex]["name"], surname: list[objIndex]["surname"], age: list[objIndex]["age"], job: list[objIndex]["job"], salary: list[objIndex]["salary"] });

    }
    handleOpen();
  }

  const openDeleteModal = (input) => {
    setSelectedId(input);
    handleOpen2();
  }

  const crudObject = {
    openCreateUpdateModal, openDeleteModal
  }

  const deletePerson = () => {

    setList(list.filter(x => x.id != selectedId));
    handleClose2();
  }

  const editPerson = (input) => {
    setformSubmitted(true);
    if (!(personForm.name && personForm.age && personForm.job && personForm.salary)) {
      return;
    }
    let objIndex = list.findIndex((x => x.id == input));
    list[objIndex] = { ...list[objIndex], ...personForm };
    resetForm();
    handleClose();
  }

  const createPerson = () => {
    setformSubmitted(true);
    if (!(personForm.name && personForm.age && personForm.job && personForm.salary)) {
      return;
    }
    setList([...list, { ...personForm, id: (list.length + 1) }]);
    resetForm();
    handleClose();
  }
  
  const handleForm = (e) => {
    setPersonForm({ ...personForm, [e.target.name]: e.target.value })
  }

  const resetForm=()=>{
    setPersonForm(initialForm);
    setformSubmitted(false);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="person-list" element={<PersonList list={list} functions={crudObject} />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {open &&
        <CustomModal closeModal={()=>{handleClose();resetForm();}}>
          <form>
            <div>
              <label>Ad</label><br />
              <input type="text" value={personForm.name} onChange={handleForm} name="name" />
              {(!personForm.name) && formSubmitted &&
                <div>Zorunlu Alanı doldurun</div>
              }
            </div>
            <div>
              <label>Soyad</label><br />
              <input type="text" value={personForm.surname} onChange={handleForm} name="surname" />
              {(!personForm.surname) && formSubmitted &&
                <div>Zorunlu Alanı doldurun</div>
              }
            </div>
            <div>
              <label>Yaş</label><br />
              <input type="text" value={personForm.age} onChange={handleForm} name="age" />
              {(!personForm.age) && formSubmitted &&
                <div>Zorunlu Alanı doldurun</div>
              }
            </div>
            <div>
              <label>Meslek</label><br />
              <input type="text" value={personForm.job} onChange={handleForm} name="job" />
              {(!personForm.job) && formSubmitted &&
                <div>Zorunlu Alanı doldurun</div>
              }
            </div>
            <div>
              <label>Maaş</label><br />
              <input type="text" value={personForm.salary} onChange={handleForm} name="salary" />
              {(!personForm.salary) && formSubmitted &&
                <div>Zorunlu Alanı doldurun</div>
              }

            </div>
            {createOrUpdate ?
              <button onClick={() => editPerson(selectedId)}>
                Güncelle
              </button> :
              <button onClick={() => createPerson()}>
                Kaydet
              </button>
            }
            <button onClick={()=>{handleClose();resetForm();}}>Hayır</button>
          </form>
        </CustomModal>}
        {opendelte&&
          <CustomModal closeModal={handleClose2}>
          <div>
          Veriyi Silmek istediğinizden emin misiniz?
          </div>
          <div>
          <button onClick={()=>deletePerson()}>Evet</button>
            <button onClick={handleClose2}>Hayır</button>
          </div>
          </CustomModal>}


      {/* <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      <form>
        <div>
        <label>Ad</label><br/>
        <input type="text" value={personForm.name} onChange={handleForm} name="name"/>
        {(!personForm.name)&&formSubmitted&&
          <div>Zorunlu Alanı doldurun</div>
        }
        </div>
        <div>
        <label>Soyad</label><br/>
        <input type="text" value={personForm.surname} onChange={handleForm} name="surname"/>
        {(!personForm.surname)&&formSubmitted&&
          <div>Zorunlu Alanı doldurun</div>
        }
        </div>
        <div>
        <label>Yaş</label><br/>
        <input type="text"   value={personForm.age} onChange={handleForm} name="age"/>
        {(!personForm.age)&&formSubmitted&&
          <div>Zorunlu Alanı doldurun</div>
        }
        </div>
        <div>
        <label>Meslek</label><br/>
        <input type="text"  value={personForm.job} onChange={handleForm} name="job"/>
        {(!personForm.job)&&formSubmitted&&
          <div>Zorunlu Alanı doldurun</div>
        }
        </div>
        <div>
        <label>Maaş</label><br/>
        <input type="text" value={personForm.salary} onChange={handleForm} name="salary"/>
        {(!personForm.salary)&&formSubmitted&&
          <div>Zorunlu Alanı doldurun</div>
        }
        
        </div>
      </form>
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    {createOrUpdate?
    <button onClick={()=>editPerson(selectedId)}>
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
      </Modal> */}
    </div>

  );
}

export default App;
