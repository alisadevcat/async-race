import { Page, Car } from "../types/all-types";
import { generateAllTracks } from "./getTracks";

const createGaragePage: () => HTMLElement = (): HTMLElement => {
  const garage: HTMLElement = document.createElement("section");
  garage.classList.add("garage");
  garage.id = "garage";
  return garage;
};

export const createPageTop: (
  page: Page,
  num: number,
  total: number
) => HTMLDivElement = (
  page: Page,
  num: number,
  total: number
): HTMLDivElement => {
  const heading1 = document.createElement("h1");
  const heading2 = document.createElement("h2");
  heading1.innerText = `${page}(${total})`;
  heading2.innerText = `Page#${num}`;
  const div = document.createElement("div");
  div.classList.add("page-top-container");
  div.append(heading1, heading2);
  return div;
};

const generateGarage: (
  page: Page,
  cars: Car[],
  totalCards: number
) => HTMLElement = (
  page: Page,
  cars: Car[],
  totalCards: number
): HTMLElement => {
  const garage: HTMLElement = createGaragePage();
  const div = document.createElement("div");
  div.id = "page-garage";
  const divTop = document.createElement("div");
  divTop.id = "page-garage-top";
  const pageNum: number = Number(localStorage.getItem("currenPage"));

  if (cars) {
    divTop.append(createPageTop(page, pageNum, totalCards));
    div.append(generateAllTracks(cars));
    garage.append(divTop,div );
  }

  return garage;
};

export default generateGarage;
