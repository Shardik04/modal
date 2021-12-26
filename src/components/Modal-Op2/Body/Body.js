import React, { forwardRef } from 'react';
import { ModalBody } from './Body.style';
import PropTypes from 'prop-types';

const Body = forwardRef(
  ({ children, id, className: customClassName = '', ...rest }, ref) => {
    return (
      <ModalBody
        id={id}
        ref={ref}
        className={`modal-body ${customClassName}`}
        {...rest}
      >
        {children}
      </ModalBody>
    );
  },
);

export default Body;

Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
};
