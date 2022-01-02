import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import { default as ModalOption2 } from './components/Modal-Op2';
import ModalWrapper from './components/ModalWrapper';

function App() {
  const [show, setShow] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const [modalStateList, setModalStateList] = useState([]); // [{id: 'abc', isOpen: false}, {id: 'xyz', isOpen: false}]  ['']

  const ModalContext = React.createContext();

  const openModal = (id) => {
    setModalStateList((prevState) => [...prevState, id]);
  };

  const modalFilter = (id) => {
    return modalStateList?.includes(id);
  };

  const modalClose = () => {
    modalStateList.pop();
    setModalStateList([...modalStateList]);
  };

  return (
    <div className="App">
      <ModalContext.Provider value={(modalStateList, setModalStateList)}>
        <button
          onClick={() => openModal(`modal-${Math.floor(Math.random() * 100)}`)}
        >
          Open Modal Option 1
        </button>
        {modalStateList.map((id) => {
          return (
            <ModalWrapper key={id}>
              <Modal
                id={id}
                title={`Modal Title id: ${id}`}
                onClose={modalClose}
                isOpen={modalFilter(id)}
              >
                <p>This is modal body </p>
              </Modal>
            </ModalWrapper>
          );
        })}

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
            <ModalOption2
              onClose={() => setModal3(false)}
              isOpen={modal3}
              width="200px"
              height="200px"
            >
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
      </ModalContext.Provider>
    </div>
  );
}

export default App;
