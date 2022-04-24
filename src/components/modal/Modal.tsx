import React, { Fragment } from "react";
import { useModalContext } from "../../context/modal/modalContext";

import "./modal.css";

const Modal = () => {
  const { show, hideModal, children } = useModalContext();

  if (show) {
    return (
      <div onBlur={() => hideModal()} className={`services__modal`}>
        <div className="services__modal-content">
          <i
            className="bx bx-x services__modal-close"
            onClick={() => hideModal()}
          />
          {children}
        </div>
      </div>
    );
  } else return <Fragment />;
};

export default Modal;
