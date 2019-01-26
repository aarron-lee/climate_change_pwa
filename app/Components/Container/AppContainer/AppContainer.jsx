import React, { Fragment } from 'react';

import Header from 'PresentationalComponents/Header/Header';
import Modal from 'PresentationalComponents/Modal/Modal';

const AppContainer = () => {
  return (
    <Fragment>
      <Header>Climate Change Guide</Header>
      <div style={{ paddingTop: '60px' }}>
        <Modal>
          <Modal.Content>
            modalContent
            <Modal.CloseButton>Close modal</Modal.CloseButton>
          </Modal.Content>
          <Modal.OpenButton>Open Modal</Modal.OpenButton>
        </Modal>
      </div>
    </Fragment>
  );
};

export default AppContainer;
