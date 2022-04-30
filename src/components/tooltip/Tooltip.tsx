import React from "react";

import "./tooltip.styles.css";

interface tooltipProps {
  text: string;
  direction?: string;
}

const Tooltip = ({ text, direction }: tooltipProps) => (
  <span className={direction}>{text}</span>
);

export default Tooltip;
