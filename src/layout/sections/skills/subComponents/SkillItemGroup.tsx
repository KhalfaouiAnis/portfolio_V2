import React from "react";
import SkillItemData from "./SkillItemData";
import { groupProps } from "../models/interfaces";

const SkillItemGroup = ({ group }: groupProps) => (
  <div className="skills__group">
    {group.map(({ skillName, skillLevel }) => (
      <SkillItemData skillName={skillName} skillLevel={skillLevel} />
    ))}
  </div>
);

export default SkillItemGroup;
