import React, { useEffect } from 'react';
import { Container, ModalBody } from './styles';
export default ({ children, status, setStatus }) => {
  const handleModalClick = (e) => {
    if (e.target.classList.contains("modalBg")) {
      setStatus(false);
    }
  }
  useEffect(()=>{
    document.addEventListener("keyup",(ev)=>{
      if(ev.key === "Escape"){
        setStatus(false);
      }
    });
    return () => {
      document.removeEventListener("keyup");
    }
  },[setStatus]);

  return (
    <Container status={status} onClick={handleModalClick} className="modalBg">
      <ModalBody>
        {children}
      </ModalBody>
    </Container>
  )
}