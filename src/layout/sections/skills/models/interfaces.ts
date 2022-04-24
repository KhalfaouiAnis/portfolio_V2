export interface dataProps {
  skillName: string;
  skillLevel: string;
}

export interface groupProps {
  group: dataProps[];
}

export interface boxProps {
  data: groupProps[];
}

export interface contentProps {
  type: string;
  data: boxProps;
}
