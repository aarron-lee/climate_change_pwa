import React from 'react';
import { Portal } from 'react-portal';

const ModalContext = React.createContext();

const { Provider, Consumer } = ModalContext;

const ToggleButton = ({ children, openOnClick = false, ...props }) => (
  <Consumer>
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
      {({ modalIsOpen }) => {
        if (!modalIsOpen) {
          return null;
        }
        return <Portal>{children}</Portal>;
      }}
    </ModalContext.Consumer>
  );

  static CloseButton = ({ children, ...props }) => (
    <ToggleButton openOnClick={false} {...props}>
      {children}
    </ToggleButton>
  );

  static OpenButton = ({ children, ...props }) => (
    <ToggleButton openOnClick {...props}>
      {children}
    </ToggleButton>
  );

  toggleModal = newModalState => this.setState({ modalIsOpen: newModalState });

  render() {
    return (
      <Provider value={{ modalIsOpen: this.state.modalIsOpen, toggleModal: this.toggleModal }}>
        {this.props.children}
      </Provider>
    );
  }
}

export default Modal;
