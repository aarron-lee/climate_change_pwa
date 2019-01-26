import React, { Fragment } from 'react';

import Header from 'PresentationalComponents/Header/Header';
import Modal, {
  ModalContent,
  OpenModalButton,
  CloseModalButton
} from 'PresentationalComponents/Modal/Modal';

const AppContainer = () => {
  return (
    <Fragment>
      <Header>Climate Change Guide</Header>
      <div style={{ paddingTop: '60px' }}>
        <Modal>
          <ModalContent>
            modalContent
            <CloseModalButton>Close modal</CloseModalButton>
          </ModalContent>
          <OpenModalButton>Open Modal</OpenModalButton>
        </Modal>
      </div>
    </Fragment>
  );
};

export default AppContainer;
