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

    if (!isOpen) {
      return null;
    }

    return (
      <ModalOverlay
        ref={ref}
        id={id}
        className={`${customClassName} modal`}
        isOpen={isOpen}
        onClick={onOutsideClick}
        role="dialog"
        aria-modal="true"
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
  /** Expects child nodes for body */
  children: PropTypes.node,
  /** unique identifier for modal */
  id: PropTypes.string,
  /** className for modal */
  className: PropTypes.string,
  /** Flag indicated the close of modal on outside click */
  canOutsideClickClose: PropTypes.bool,
  /** Flag indicated the close of modal on "Esc" key */
  canEscapeKeyClose: PropTypes.bool,
  /** Flag indicated the visibility of the modal */
  isOpen: PropTypes.bool.isRequired,
  /** The function will be called with "false" value so that the calling component can toggle the "isOpen" property */
  onClose: PropTypes.func.isRequired,
  /** width for modal */
  width: PropTypes.string,
  /** height for modal */
  height: PropTypes.string,
  /** title for modal header */
  title: PropTypes.string,
};

Modal.defaultProps = {
  canOutsideClickClose: true,
  canEscapeKeyClose: true,
  width: '500px',
};
