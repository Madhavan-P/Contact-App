import user from '../assets/user.png'
import {useParams,Link} from 'react-router-dom'


export default function ContactDetails(props){

    const { id } =useParams();

    const ContactDetails = props.DataToShow.find((ch)=> ch.id === id);

    return (
        <div className="main" style={{marginTop:"100px",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className='content'>
                    <div className='header'>{ContactDetails.name}</div>
                    <div className='description'>{ContactDetails.phone}</div>
                    <div className='description'>{ContactDetails.email}</div>
                </div>
            </div>
            <div className='center-div' style={{marginTop:"20px"}}>
                <Link to="/" >
                <button className='ui button blue center'> Back to Contact List</button>
                </Link>
            </div>
        </div>
    )
}