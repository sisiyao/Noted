import React from 'react';
import Modal from 'react-modal';
import profileModalStyle from './profile_modal_style';

const ProfileModal = ({modalOpen, closeModal, currentUser}) => {
  return (
    <Modal isOpen={modalOpen}
      onRequestClose={closeModal} style={profileModalStyle}>
        <div className='profile-modal-body'>
          <div className="profile-heading">You are currently logged in as:</div>
          <div className="profile-username">{currentUser.username}</div>
        </div>
    </Modal>
  );
};

export default ProfileModal;
