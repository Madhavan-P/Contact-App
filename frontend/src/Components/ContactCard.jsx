import user from '../assets/user.png'
import {Link} from 'react-router-dom'
import EditContact from './EditContact';

export default function ContactCard(props){
    const {id,name,phone} = props.contacts;

    return(
        <>
            
            <div className="item"  style={{display:"flex", alignItems:"center",justifyContent:'space-between',padding:"20px",marginTop:"20px"}}>
                <img src={user} alt='user' className='ui image avatar' />
                <Link to={`/contacts/${id}`} state={{ contact: props.contacts }}>
                    <div className="content" style={{
                                fontSize: "18px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px" // optional: space between name and email
                            }}>
                        <div className="header">
                            {name}
                        </div>
                        <div>{phone}</div>
                    </div>
                </Link>
                <Link to={`/edit/${id}`}>
                    <div  className="right floated content"><i className="edit alternate outline icon" style={{color:"blue" ,marginTop:"7px"}}></i></div>
                </Link>
                <div  className="right floated content"><i className="trash alternate outline icon" style={{color:"red" ,marginTop:"7px"}} onClick={()=>{props.IndexToDelete(id) , console.log(id)}}></i></div>
            </div>
        </>
    )
}