import './App.css'
import AddContact from './Components/AddContact'
import ContactList from './Components/ContactList'
import Header from './Components/Header'
import React,{useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ContactDetails from './Components/ContactDetails'
import api from './api/Contact';
import EditContact from './Components/EditContact'


function App() {
  const LOCAL_STORAGE_KEY = "contacts-key";

  const [Contacts, setContacts] = useState([]);
  const [SearchTerm, SetSearch] = useState("");
  const [FilterContacts,setFilterContacts] = useState([]);

  const RetrivedData =async()=>{
    const response = await api.get('/contacts');
    return response.data;
  }


  useEffect(()=>{
    const getAllContacts = async()=>{
      const allContacts = await RetrivedData();
      console.log(allContacts)
      if(allContacts) {
        setContacts(allContacts)
        setFilterContacts(allContacts);
      }
    }
    getAllContacts();
  },[])

  useEffect(()=>{
    if(SearchTerm === ""){
      setFilterContacts(Contacts);
    }
    else{
      const result = Contacts.filter((contact)=>{
        return contact.name.toLowerCase().includes(SearchTerm.toLowerCase()) || contact.email.toLowerCase().includes(SearchTerm.toLowerCase()) || contact.phone.includes(SearchTerm);
      })
      setFilterContacts(result);
    }

  },[SearchTerm,Contacts])

  const onSearchChange = (e)=>{
    SetSearch(e.target.value);
  }


  const AddingContacts =async(con)=>{
    if(Contacts.find(c=> c.email == con.email)){
      alert("Contact is already exists!");
      return ;
    }
    const request ={ id: uuidv4(), ...con };
    const response = await api.post('/contacts',request);
    console.log(response);

    setContacts([...Contacts,response.data]);
  }

  const UpdateHandler = async(data)=>{

    const response = await api.put(`/contacts/${data.id}`,data);
    setContacts(
      Contacts.map((contactPut)=>{
        return contactPut.id === data.id ? {... response.data} : contactPut;
      })
    )
    // setContacts([...Contacts,response.data]);
  }

  const DeletingHandler =async(id)=>{
    if(window.confirm("Are you sure to delete this contact ?")){
      
      await api.delete(`/contacts/${id}`)
      setContacts(Contacts.filter((contact)=>{
        return contact.id !== id
      }));
    }

    
  }

  
  
  return (
    <>
      <Router>
      <div className='ui container'>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList contacts={FilterContacts} HandlerForDelete={DeletingHandler} term={SearchTerm} 
              SearchTerm={SearchTerm} onSearchChange={onSearchChange}/>
            }
          />
          <Route
            path="/addContacts"
            element={
              <AddContact addContacts={AddingContacts} />
            }
          />

          <Route
            path="/edit/:id"
            element={
              <EditContact editContacts={Contacts} UpdateHandler={UpdateHandler} />
            }
          />
          <Route
            path="/contacts/:id"
            element={
              <ContactDetails DataToShow={Contacts} />
            }
          />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
