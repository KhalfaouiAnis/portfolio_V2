import React from "react";

type modalItemProps = {
  info: string;
};

const ModalItem = ({ info }: modalItemProps) => (
  <li className="modal-item">
    <i className={`bx bx-check modal-icon`}></i>
    <p className="modal-info">{info}</p>
  </li>
);

export default ModalItem;
