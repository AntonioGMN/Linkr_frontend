import Modal from "react-modal";

import { ModalText, ModalButtonsDiv, ModalButton } from "./styles";

export default function PostModal({
  children,
  modalIsOpen,
  setModalIsOpen,
  loading,
  loadingText,
  action,
  cancelText,
  confirmText,
}) {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  
      width: '597px',
      height: '262px',
      borderRadius: '50px',
      background: '#333333',
  
      fontWeight: 700,
      fontSize: '34px',
      color: '#ffffff',
      textAlign: "center",
    },
  };

  Modal.setAppElement(".root");

  return (
    <Modal isOpen={modalIsOpen} style={customStyles}>
      {loading ? <ModalText>{loadingText}</ModalText> :
      (<>
        <ModalText>
          {children}
        </ModalText>
        <ModalButtonsDiv>
          <ModalButton cancel onClick={() => setModalIsOpen(false)}>
            {cancelText}
          </ModalButton>
          <ModalButton onClick={action}>{confirmText}</ModalButton>
        </ModalButtonsDiv>
      </>)}
    </Modal>
  );
}
