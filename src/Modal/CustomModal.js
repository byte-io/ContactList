import Modal from 'react-modal';
Modal.setAppElement('#root')

function CustomModal(props){
    return (
        <Modal 
            isOpen={props.modal} 
            onRequestClose={props.closeModal}
            style={{
                overlay : {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)'
                },
                content : {
                    
                    display: "flex",
                    justifyContent: "center",
                    top: '60px',
                    left: '350px',
                    right: '350px',
                    bottom: '60',
                    padding: '20px',
                    borderRadius: "20px",
                    border: "6px solid black"
                }
            }}>
                {props.children} 
        </Modal>
    )

    

}

export default CustomModal;
