import React, { useRef } from "react";
import { useModalContext } from "../../context/modal/modalContext";
import useOnClickOutside from "../../hooks/useOnClickOutside";

import "./modal.css";

const Modal = () => {
  const { show, hideModal, children } = useModalContext();
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, () => hideModal());

  return (
    <div className={`services__modal ${show ? "visible" : ""}`}>
      <div ref={modalRef} className="services__modal-content">
        <i
          className="bx bx-x services__modal-close"
          onClick={() => hideModal()}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
