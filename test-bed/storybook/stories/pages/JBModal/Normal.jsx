import React, { useState } from 'react'
import JBModal from '../../../../../react-component/jb-modal/lib/JBModal';
import './Normal.css';
export default function Normal() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='normal-page'>
            <div className='button-wrapper'>
                <button onClick={()=>setIsOpen(true)}>open</button>
                <JBModal isOpen={isOpen} onClose={()=>{setIsOpen(false);}}>
                    <div className='modal-test-content'>salam</div>
                </JBModal>
            </div>
        </div>
    )
}
