import './ContactList.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

const theme = createTheme({
    palette: {
      primary: {
        main: '#ec407a',
      }
    }
});

function ContactList(props){
    return(
        <div className='contactList'>
            <div className='contactHeader'>
                <div className='contactIcon'>
                <FontAwesomeIcon icon={faAddressBook} size="3x" color='#FF2442' />
                </div>
                <div>
                    <h1 className='mainLine'>Contacts</h1>
                    <p className='subLine'>Welcome to the contact page</p>
                </div>
            </div>
            <div className='searchBar'>
                <input className='searchBox'  type='text' placeholder='Search contacts' onChange={props.inputChangeHandler} value={props.inputValue}></input>
                <ThemeProvider theme={theme}>
                <Button variant="contained" color='primary' onClick={props.openModal}>Add Contact</Button> 
                </ThemeProvider>
            </div>
            <div className='contactListHeader'>
                <button className='plusButton'>+</button>
                <p>Basic Info</p>
                <p>Company</p>
            </div>
            {props.filteredArray.map(item => <div className='contactListItem' tabIndex='1' onClick={()=>props.contactBodyHandler(item)}>
                                                <div className='avatar'>{item.name.split(' ')[0].charAt(0).toUpperCase()+item.name.split(' ')[1].charAt(0).toUpperCase()}</div>
                                                <div className='fullNameContainer'>
                                                    <div className='fullName'>{item.name}</div>
                                                    <div className='email'>{item.email}</div>
                                                </div>
                                                <div className='company'>{item.company}</div>
                                            </div>)}
        </div>
    )

}

export default ContactList;
