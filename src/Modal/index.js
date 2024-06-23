import './index.css'
import React from 'react';

const Modal = ({isOpen, onClose, children}) =>{
    if(!isOpen) return null;
    // const handleMOdal = (event) =>{
    //     event.stopPropagation();
    //     onClose();
    // }
    const handleOnClick = (event) =>{
        event.stopPropagation();
    }
    const handleOverLay =(event)=>{
        event.stopPropagation();
        onClose();
    }
    return(
        <div onClick={handleOverLay} className='modal'>
            <div onClick={handleOnClick} className='onClick'>
                {children}
            </div>
           
        </div>
    )
}
export default Modal;