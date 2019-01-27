import React from 'react';

import Body from 'PresentationalComponents/Body/Body';
import GithubIcon from 'Images/github_icon';
import Header from 'PresentationalComponents/Header/Header';
import Main from 'PresentationalComponents/Main/Main';
import Modal, { MODAL_SIZES } from 'PresentationalComponents/Modal/Modal';

import withIsMobile from 'UtilComponents/withIsMobile';

const GithubInfoModal = () => (
  <Modal size={MODAL_SIZES.SMALL}>
    <Modal.Content>
      <h3>Project created by Aarron Lee</h3>
      <p>
        Github Profile:{' '}
        <a href="https://github.com/aarron-lee">
          <GithubIcon height={25} width={25} />
        </a>
      </p>
      <Modal.CloseButton>Close modal</Modal.CloseButton>
    </Modal.Content>
    <Modal.OpenButton>
      {({ openModal }) => {
        return <GithubIcon height={25} width={25} onClick={openModal} />;
      }}
    </Modal.OpenButton>
  </Modal>
);

const AppContainer = ({ isMobile }) => {
  return (
    <Body>
      <Header>
        <div>Climate Change Guide</div>
        <GithubInfoModal />
      </Header>
      <Main />
    </Body>
  );
};

export default withIsMobile(AppContainer);
