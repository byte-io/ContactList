import './ContactSideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBars, faUserCircle, faHeart, faCog } from '@fortawesome/free-solid-svg-icons'

function ContactSideBar(){
    return(
        <div className='contactSideBar'>
            <button className='buttonIcon'><FontAwesomeIcon icon={faBars}  size='2x' color="white"/></button>
            <button className='buttonIcon'><FontAwesomeIcon icon={faHome}  size='2x' color="white"/></button>
            <button className='buttonIcon'><FontAwesomeIcon icon={faUserCircle}  size='2x' color="white"/></button>
            <button className='buttonIcon'><FontAwesomeIcon icon={faHeart}  size='2x' color="white"/></button>
            <button className='buttonIcon'><FontAwesomeIcon icon={faCog}  size='2x' color="white"/></button>
        </div>
    )
    
}

export default ContactSideBar;
