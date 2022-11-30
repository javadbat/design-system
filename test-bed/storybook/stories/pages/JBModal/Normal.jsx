import React, { useState } from 'react'
import JBModal from '../../../../../react-component/jb-modal/lib/JBModal';

export default function Normal() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className='button-wrapper'>
                <button onClick={()=>setIsOpen(true)}>open</button>
                <JBModal isOpen={isOpen} onClose={()=>{setIsOpen(false);}}>
                    salam
                </JBModal>
            </div>
        </div>
    )
}
