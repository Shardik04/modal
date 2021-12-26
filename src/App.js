import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import { default as ModalOption2 } from './components/Modal-Op2';

function App() {
  const [show, setShow] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Show Modal Option 1</button>
      <Modal title="Modal Title" onClose={() => setShow(false)} isOpen={show}>
        <p>This is modal body</p>
      </Modal>
      <br />

      <button onClick={() => setModal2(true)}>Show Modal Option 2</button>
      <ModalOption2 onClose={() => setModal2(false)} isOpen={modal2}>
        <ModalOption2.Header title="Modal title">
          <h6>Sub title</h6>
        </ModalOption2.Header>
        <ModalOption2.Body>
          <button onClick={() => setModal3(true)}>Show Modal</button>
          <p>Body content!</p>
          <p>Body content!</p>
          <ModalOption2 onClose={() => setModal3(false)} isOpen={modal3}>
            <ModalOption2.Body>
              <p>Child modal Body content!</p>
              <p>Child modal Body content!</p>
            </ModalOption2.Body>
            <ModalOption2.Footer>
              <button onClick={() => setModal3(false)}>Click Me!!</button>
            </ModalOption2.Footer>
          </ModalOption2>
        </ModalOption2.Body>
        <ModalOption2.Footer>
          <button onClick={() => setModal2(false)}>Click Me!!</button>
        </ModalOption2.Footer>
      </ModalOption2>
    </div>
  );
}

export default App;
