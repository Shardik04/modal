import React, { useState } from 'react';

import Modal from '../components/Modal';

export default {
  title: 'Example/Modal',
  component: Modal,
};

const Template = (args) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>Show Modal Option 1</button>
      <Modal title="Modal Title" onClose={() => setShow(false)} isOpen={show}>
        <p>This is modal body</p>
      </Modal>
    </>
  );
};

export const Modal1 = Template.bind({});
Modal1.args = {
  canOutsideClickClose: true,
  canEscapeKeyClose: true,
  width: '500px',
  isOpen: false,
  title: 'Modal title',
  onClose: () => {},
};
