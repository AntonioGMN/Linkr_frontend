import Modal from "react-modal";

import { ModalText, ModalButtonsDiv, ModalButton } from "./styles";

export default function PostDeletionModal({
  deletionModalIsOpen,
  setDeletionModalIsOpen,
  deletingPost,
  postToBeDeletedId,
  deletePost,
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
    <Modal isOpen={deletionModalIsOpen} style={customStyles}>
      {deletingPost ? <ModalText>Deleting post...</ModalText> :
      (<>
        <ModalText>
          Are you sure you want
          <br /> to delete this post?
        </ModalText>
        <ModalButtonsDiv>
          <ModalButton cancel onClick={() => setDeletionModalIsOpen(false)}>
            No, go back
          </ModalButton>
          <ModalButton onClick={() => deletePost(postToBeDeletedId)}>Yes, delete it</ModalButton>
        </ModalButtonsDiv>
      </>)}
    </Modal>
  );
}
