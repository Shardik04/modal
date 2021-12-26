import React, { forwardRef, useEffect } from 'react';
import { ModalOverlay, ModalContainer } from './Modal.style';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import PropTypes from 'prop-types';

const Modal = forwardRef(
  (
    {
      children,
      id,
      className: customClassName = '',
      canOutsideClickClose = true,
      canEscapeKeyClose = true,
      isOpen,
      onClose,
      width = '500px',
      height = '500px',
      ...rest
    },
    ref,
  ) => {
    const closeOnEscapeKeyDown = (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    };

    const onOutsideClick = (event) => {
      if (canOutsideClickClose) {
        onClose();
        event.stopPropagation();
      } else {
        return void 0;
      }
    };

    useEffect(() => {
      canEscapeKeyClose &&
        document.body.addEventListener('keydown', closeOnEscapeKeyDown);
      return function cleanup() {
        canEscapeKeyClose &&
          document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
      };
    }, []);

    return (
      <ModalOverlay
        ref={ref}
        id={id}
        className={`${customClassName} modal`}
        isOpen={isOpen}
        onClick={onOutsideClick}
        role="dialog"
        {...rest}
      >
        <ModalContainer
          width={width}
          height={height}
          className="modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </ModalContainer>
      </ModalOverlay>
    );
  },
);

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  canOutsideClickClose: PropTypes.bool,
  canEscapeKeyClose: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
};

Modal.defaultProps = {
  canOutsideClickClose: true,
  canEscapeKeyClose: true,
  width: '500px',
};
