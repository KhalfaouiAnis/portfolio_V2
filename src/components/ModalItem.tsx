import React from "react";

type modalItemProps = {
  info: string;
};

const ModalItem = ({ info }: modalItemProps) => (
  <li className="services__modal-item">
    <i className={`bx bx-check services__modal-icon`}></i>
    <p className="services__modal-info">{info}</p>
  </li>
);

export default ModalItem;
