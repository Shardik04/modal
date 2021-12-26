import React, { forwardRef } from 'react';
import { ModalHeader, ModalHeaderBody } from './Header.style';
import PropTypes from 'prop-types';

const Header = forwardRef(
  ({ children, id, className: customClassName = '', title, ...rest }, ref) => {
    return (
      <ModalHeader
        id={id}
        ref={ref}
        className={`modal-header ${customClassName}`}
        {...rest}
      >
        {title && <h4 className="modal-title">{title}</h4>}
        {children && <ModalHeaderBody>{children}</ModalHeaderBody>}
      </ModalHeader>
    );
  },
);

export default Header;

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};
