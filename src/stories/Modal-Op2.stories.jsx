import React, { useState } from 'react';

import Modal from '../components/Modal-Op2';

export default {
  title: 'Example/Modal',
  component: Modal,
};

const Template = (args) => {
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  return (
    <>
      <button onClick={() => setModal2(true)}>Show Modal Option 2</button>
      <Modal onClose={() => setModal2(false)} isOpen={modal2}>
        <Modal.Header title="Modal title">
          <h6>Sub title</h6>
        </Modal.Header>
        <Modal.Body>
          <button onClick={() => setModal3(true)}>Open Nested Modal</button>
          <p>Body content!</p>
          <p>Body content!</p>
          <Modal
            width="200px"
            height="200px"
            onClose={() => setModal3(false)}
            isOpen={modal3}
          >
            <Modal.Body>
              <p>Child modal Body content!</p>
              <p>Child modal Body content!</p>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={() => setModal3(false)}>Close Modal</button>
            </Modal.Footer>
          </Modal>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setModal2(false)}>Close Modal</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const Modal2 = Template.bind({});
Modal2.args = {
  canOutsideClickClose: true,
  canEscapeKeyClose: true,
  width: '500px',
  isOpen: false,
  onClose: () => {},
};
