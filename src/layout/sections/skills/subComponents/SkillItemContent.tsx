import React from "react";
import SkillItemBox from "./SkillItemBox";
import { contentProps } from "../models/interfaces";

const SkillItemContent = ({ type, data }: any) => (
  <div className="skills__content">
    <h3 className="skills__title">{type}</h3>
    <SkillItemBox data={data.data} />
  </div>
);

export default SkillItemContent;
