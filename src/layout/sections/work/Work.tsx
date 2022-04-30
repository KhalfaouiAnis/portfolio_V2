import React, { useState, SyntheticEvent } from "react";
import SectionWrapper from "../../shared/SectionWrapper";
import Card from "./subComponents/Card";
import data from "./data/work.json";

import "./work.styles.css";

const filters = ["all", "web", "mobile", "reeltime"];

const Work = () => {
  const [filteredItems, setFilteredItems] = useState(data);
  const [filter, setFilter] = useState<string>(filters[0]);
  const [isMounted, setIsMounted] = useState(true);

  const handleClickFilter = (e: SyntheticEvent) => {
    const { id } = e.target as HTMLElement;
    if (!id || id === filter) return;
    setIsMounted(true);
    setFilter(id);
    document.getElementById(id)?.classList.add("active-work");
    document.getElementById(filter)?.classList.remove("active-work");
    if (id === "all") {
      setFilteredItems(data);
    } else {
      const filtered = data.filter((item) => item.type === id);
      setFilteredItems(filtered);
    }
  };

  return (
    <SectionWrapper name="work">
      <span className="section__subtitle">My Projects</span>
      <h2 className="section__title">Recent Works</h2>
      <div className="work__filters">
        <span
          id="all"
          className="work__filter active-work"
          onClick={(e) => handleClickFilter(e)}
        >
          All
        </span>
        <span
          id="web"
          className="work__filter"
          onClick={(e) => handleClickFilter(e)}
        >
          Web
        </span>
        <span
          id="mobile"
          className="work__filter"
          onClick={(e) => handleClickFilter(e)}
        >
          Mobile
        </span>
        <span
          id="reeltime"
          className="work__filter"
          onClick={(e) => handleClickFilter(e)}
        >
          Reel time
        </span>
      </div>
      <div className="work__container container grid">
        {filteredItems.map(({ image, title, link }) => (
          <Card
            key={title}
            isMounted={isMounted}
            image={require(`../../../assets/img/${image}`)}
            title={title}
            link={link}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Work;
