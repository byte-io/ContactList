import React from 'react';
import './Contact.css'
import dataArray from '../Data.json';
import ContactList from './ContactList';
import ContactBody from './ContactBody';
import ContactSideBar from './ContactSideBar';
import CustomModal from '../Modal/CustomModal';
import ContactForm from './ContactForm';



class Contact extends React.Component {
    constructor(){
        super()
        this.state = { contactData: dataArray,
                        filteredArray: dataArray,
                        inputValue: '',
                        contactDataBody:dataArray[0], 
                        contactModal : false   }
    }

    addContact=(contact)=>{
        console.log('addy'+ JSON.stringify(contact))
        this.setState(prevstate=>({contactData : [...prevstate.contactData, contact],
                                    filteredArray: [...prevstate.contactData, contact],
                                    contactModal: false}))
    }

    inputChangeHandler = (e) => {
        this.setState(prevState=> ({filteredArray : prevState.contactData.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase())),
                                    inputValue: e.target.value
                                    }))
    }

    contactBodyHandler = (item) => {
        this.setState({contactDataBody: item})
    }

    openContactModal = () => {
        this.setState({contactModal: true})
    }


    closeContactModal = () => {
        this.setState({contactModal: false})
    }



    render() {
        return (
            <div>
                <CustomModal 
                    modal={this.state.contactModal}
                    closeModal={this.closeContactModal}>
                        <ContactForm 
                            addContact={this.addContact}
                            closeContactModal={this.closeContactModal}/>
                </CustomModal>
                <ContactSideBar/>
                <div className='contact'>
                    <ContactList 
                        filteredArray={this.state.filteredArray}
                        contactBodyHandler={this.contactBodyHandler}
                        openModal = {this.openContactModal}
                        inputChangeHandler={this.inputChangeHandler}
                        inputValue={this.state.inputValue}/>
                    <ContactBody 
                        bodyData ={this.state.contactDataBody}
                        
                    />
                </div>
            </div>
        )
    }
}
export default Contact;
