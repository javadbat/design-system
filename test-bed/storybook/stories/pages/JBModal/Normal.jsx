import React, { useState } from 'react';
import {JBModal} from 'jb-modal/react';
import './Normal.css';
const longString= "test long string ".repeat(200);
export default function Normal() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  return (
    <div className='normal-page'>
      <div className='button-wrapper'>
        <button onClick={()=>setIsOpen1(true)}>open</button>
        <JBModal isOpen={isOpen1} onClose={()=>{setIsOpen1(false);}}>
          <div className='modal-test-content'>salam</div>
        </JBModal>
        <button onClick={()=>setIsOpen2(true)}>open long  txt modal</button>
        <JBModal isOpen={isOpen2} onClose={()=>{setIsOpen2(false);}}>
          <div className='modal-test-content'>{longString}</div>
        </JBModal>
      </div>
    </div>
  )
}
