import React from 'react';
import { Portal } from 'react-portal';

const ModalContext = React.createContext();

const ToggleModalButton = ({ children, openOnClick = false, ...props }) => (
  <ModalContext.Consumer>
    {({ modalIsOpen, toggleModal }) => {
      if (children && typeof children === 'function') {
        return children({ modalIsOpen, toggleModal });
      }
      let changeModalState = () => toggleModal(openOnClick);
      return (
        <button {...props} onClick={changeModalState}>
          {children}
        </button>
      );
    }}
  </ModalContext.Consumer>
);

export const CloseModalButton = ({ children, ...props }) => (
  <ToggleModalButton openOnClick={false} {...props}>
    {children}
  </ToggleModalButton>
);

export const OpenModalButton = ({ children, ...props }) => (
  <ToggleModalButton {...props} openOnClick>
    {children}
  </ToggleModalButton>
);

export const ModalContent = ({ children }) => (
  <ModalContext.Consumer>
    {({ modalIsOpen }) => {
      if (!modalIsOpen) {
        return null;
      }
      return <Portal>{children}</Portal>;
    }}
  </ModalContext.Consumer>
);

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
  }

  toggleModal = newModalState => this.setState({ modalIsOpen: newModalState });

  render() {
    return (
      <ModalContext.Provider
        value={{ modalIsOpen: this.state.modalIsOpen, toggleModal: this.toggleModal }}
      >
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

export default Modal;
