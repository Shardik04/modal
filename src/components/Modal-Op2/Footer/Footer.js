import React, { forwardRef } from 'react';
import { ModalFooter } from './Footer.style';
import PropTypes from 'prop-types';

const Footer = forwardRef(
  ({ children, id, className: customClassName = '', ...rest }, ref) => {
    return (
      <ModalFooter
        id={id}
        ref={ref}
        className={`modal-footer ${customClassName}`}
        {...rest}
      >
        {children}
      </ModalFooter>
    );
  },
);

export default Footer;

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
};
