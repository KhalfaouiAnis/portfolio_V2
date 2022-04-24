import React from "react";
import SkillItemGroup from "./SkillItemGroup";
import { boxProps } from "../models/interfaces";

const SkillItemBox = ({ data }: any) => (
  <div className="skills__box">
    {/* {data.map(({ group }) => (
      <SkillItemGroup data={group} />
    ))} */}
  </div>
);

export default SkillItemBox;
