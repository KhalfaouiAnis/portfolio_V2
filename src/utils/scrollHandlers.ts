import { RefObject } from "react";

export const scrollHandler = (ref: RefObject<HTMLDivElement>) => {
  if (window.scrollY > 80) {
    ref.current?.classList.add("scroll-header");
  } else {
    ref.current?.classList.remove("scroll-header");
  }
};

export const scrollActiveHandler = () => {
  const sections = document.querySelectorAll<HTMLElement>("section[id]");
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        ?.querySelector(".nav__menu a[href*=" + sectionId + "]")
        ?.classList.add("active-link");
    } else {
      document
        ?.querySelector(".nav__menu a[href*=" + sectionId + "]")
        ?.classList.remove("active-link");
    }
  });
};
