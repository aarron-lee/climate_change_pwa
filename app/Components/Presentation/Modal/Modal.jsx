import React from 'react';
import { Portal } from 'react-portal';

import Button from 'PresentationalComponents/Button/Button';

import styles from './ModalStyles';

export const MODAL_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const ModalContext = React.createContext();

const { Provider, Consumer } = ModalContext;

const ToggleButton = ({ children, openOnClick = false, ...props }) => (
  <Consumer>
    {({ modalIsOpen, toggleModal }) => {
      if (children && typeof children === 'function') {
        return children({
          modalIsOpen,
          toggleModal,
          openModal: () => toggleModal(true),
          closeModal: () => toggleModal(false)
        });
      }
      let changeModalState = () => toggleModal(openOnClick);
      return (
        <Button {...props} onClick={changeModalState}>
          {children}
        </Button>
      );
    }}
  </Consumer>
);

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: props.initiallyOpen ? true : false
    };
  }

  static Content = ({ children }) => (
    <ModalContext.Consumer>
      {({ modalIsOpen, toggleModal, contentSize }) => {
        const closeModal = e => {
          e.stopPropagation();
          if (modalIsOpen) toggleModal(false);
        };

        return (
          <Portal>
            <div
              className={`${styles.modalBackdrop} ${modalIsOpen ? styles.backdropVisible : ''}`}
              onClick={closeModal}
            >
              <div
                className={`${styles.modalContent} ${styles[contentSize]}`}
                onClick={e => e.stopPropagation()}
              >
                {children}
              </div>
            </div>
          </Portal>
        );
      }}
    </ModalContext.Consumer>
  );

  static CloseButton = ({ children, ...props }) => (
    <ToggleButton openOnClick={false} {...props}>
      {children}
    </ToggleButton>
  );

  static OpenButton = ({ children, ...props }) => (
    <ToggleButton openOnClick={true} {...props}>
      {children}
    </ToggleButton>
  );

  toggleModal = newModalState => this.setState({ modalIsOpen: newModalState });

  render() {
    return (
      <Provider
        value={{
          modalIsOpen: this.state.modalIsOpen,
          toggleModal: this.toggleModal,
          contentSize: this.props.size || MODAL_SIZES.MEDIUM
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default Modal;
