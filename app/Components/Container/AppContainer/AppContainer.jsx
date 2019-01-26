import React, { Fragment } from 'react';

import Header from 'PresentationalComponents/Header/Header';
import Modal, { MODAL_SIZES } from 'PresentationalComponents/Modal/Modal';

const AppContainer = () => {
  return (
    <Fragment>
      <Header>Climate Change Guide</Header>
      <div style={{ paddingTop: '60px' }}>
        <Modal size={MODAL_SIZES.SMALL}>
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
