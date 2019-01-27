import React from 'react';

import Body from 'PresentationalComponents/Body/Body';
import GithubIcon from 'Images/github_icon';
import MoreInfoIcon from 'Images/more_info';
import Header from 'PresentationalComponents/Header/Header';
import Main from 'PresentationalComponents/Main/Main';
import Modal, { MODAL_SIZES } from 'PresentationalComponents/Modal/Modal';

import withIsMobile from 'UtilComponents/withIsMobile';
import Icon from 'PresentationalComponents/Icon/Icon';

const GithubInfoModal = () => (
  <Modal size={MODAL_SIZES.SMALL}>
    <Modal.Content>
      <h3>Project created by Aarron Lee</h3>
      <p>Github Profile: </p>
      <p>
        <a href="https://github.com/aarron-lee">
          <Icon svg={GithubIcon} link />
        </a>
      </p>
      <Modal.CloseButton>Close modal</Modal.CloseButton>
    </Modal.Content>
    <Modal.OpenButton>
      {({ openModal }) => {
        return <Icon svg={MoreInfoIcon} onClick={openModal} fill="white" link />;
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
      <Main>content</Main>
    </Body>
  );
};

export default withIsMobile(AppContainer);
