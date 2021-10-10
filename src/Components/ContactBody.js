import './ContactBody.css'
    
function ContactBody(props){
    
    return(
        <div className='contactBody'>
            <div className='contactDetail'>
                <div className='contactDetailTop'>
                    <div className='contactBodyAvatar'>{props.bodyData.name.split(' ')[0].charAt(0).toUpperCase()+props.bodyData.name.split(' ')[1].charAt(0).toUpperCase()}</div>
                    <h1 className='contactName'>{props.bodyData.name}</h1>
                    <p>{props.bodyData.designation}</p>
                </div>
                <div className='contactDetailBottom'>
                    <div className='eachDetail'><div className='eachDetailFirst'>Full names</div><div className='eachDetailLast'>{props.bodyData.name}</div></div>
                    <div className='eachDetail'><div className='eachDetailFirst'>Emails</div><div className='eachDetailLast'>{props.bodyData.email}</div></div>
                    <div className='eachDetail'><div className='eachDetailFirst'>Phones</div><div className='eachDetailLast'>{props.bodyData.phone}</div></div>
                    <div className='eachDetail'><div className='eachDetailFirst'>Companys</div><div className='eachDetailLast'>{props.bodyData.company}</div></div>
                    <div className='eachDetail'><div className='eachDetailFirst'>Addresss</div><div className='eachDetailLast'>{props.bodyData.address}</div></div>
                </div>
            </div>
        </div>
    )

}
export default ContactBody;
