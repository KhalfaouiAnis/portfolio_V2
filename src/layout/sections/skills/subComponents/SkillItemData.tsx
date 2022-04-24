import React from "react";
import { dataProps } from "../models/interfaces";

const SkillItemData = ({ skillName, skillLevel }: dataProps) => {
  return (
    <div className="skills__data">
      <i className="bx bxs-badge-check"></i>
      <div>
        <h3 className="skills__name">{skillName}</h3>
        <span className="skills__level">{skillLevel}</span>
      </div>
    </div>
  );
};

export default SkillItemData;
