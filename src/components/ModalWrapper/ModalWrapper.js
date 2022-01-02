import ReactDOM from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

function ModalWrapper({ children }) {
  return ReactDOM.createPortal(children, modalRoot);
}

export default ModalWrapper;
