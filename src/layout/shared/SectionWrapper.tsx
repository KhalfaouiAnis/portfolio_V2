import React from "react";

interface modalItemProps {
  name: string;
  children: any;
}

const SectionWrapper = ({ name, children }: modalItemProps) => {
  return (
    <section className={`${name} section`} id={name}>
      {children}
    </section>
  );
};

export default SectionWrapper;
