import React, { forwardRef, useEffect } from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalBody,
} from './Modal.style';
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
      height,
      title,
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
          <ModalHeader className="modal-header">
            <h4 className="modal-title">{title}</h4>
          </ModalHeader>
          <ModalBody className="modal-body">{children}</ModalBody>
          <ModalFooter className="modal-footer">
            <button onClick={onClose}>Close</button>
          </ModalFooter>
        </ModalContainer>
      </ModalOverlay>
    );
  },
);

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
  title: PropTypes.string,
};

Modal.defaultProps = {
  canOutsideClickClose: true,
  canEscapeKeyClose: true,
  width: '500px',
};
