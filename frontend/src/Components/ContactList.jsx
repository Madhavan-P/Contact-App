import React from "react";
import ContactCard from "./ContactCard";
import {Link} from 'react-router-dom';

export default function ContactList(props){

    const deleteIndex = (index) =>{
        props.HandlerForDelete(index);
    }
    
    const RenderContactList = props.contacts.length >0  ?  props.contacts.map((contact)=>{
            return(
                <ContactCard contacts={contact} key={contact.id} IndexToDelete={()=> deleteIndex(contact.id)}/>
            )})
        : <div style={{marginTop:"20px",marginLeft:"20px",fontSize:"20px"}}>No Contact Available</div>

    return(
        <>
            <div className="ui celled list" style={{marginTop:"25px",padding:"20px"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <h1 style={{marginTop:"50px"}}>Contact List</h1>
                    <Link to="/addContacts">
                    <button className="ui button blue right" style={{marginTop:"40px"}}>Add Contact</button>
                    </Link>
                </div>
                <div className="ui search" style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px"}}>
                    <div className="ui icon input" >
                        <input type="text" placeholder="Search Contact"  style={{width:"600px",borderWidth:"2px"}} className="prompt" value={props.SearchTerm} onChange={props.onSearchChange}/>
                        <i className="search icon"></i>
                    </div>
                    <h1 style={{marginTop:"0px"}}>Total Contacts : {props.contacts.length}</h1>
                </div>
                
                {RenderContactList}
            </div>
            
        </>
    )
}