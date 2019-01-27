import React from 'react';

import Body from 'PresentationalComponents/Body/Body';
import Header from 'PresentationalComponents/Header/Header';
import Main from 'PresentationalComponents/Main/Main';
import Modal, { MODAL_SIZES } from 'PresentationalComponents/Modal/Modal';

import withIsMobile from 'UtilComponents/withIsMobile';

const AppContainer = ({ isMobile }) => {
  return (
    <Body>
      <Header>
        <div>Climate Change Guide</div>
      </Header>
      <Main>
        <Modal size={MODAL_SIZES.SMALL}>
          <Modal.Content>
            modalContent
            <Modal.CloseButton>Close modal</Modal.CloseButton>
          </Modal.Content>
          <Modal.OpenButton>Open Modal</Modal.OpenButton>
        </Modal>
      </Main>
    </Body>
  );
};

export default withIsMobile(AppContainer);
