 import { Car, SVGSizes, getProperty} from "../types/all-types";
 import {colorIds} from "../utitlities/variables";

export const createCarSVG: (value: Car, sizes: SVGSizes) => SVGSVGElement = (
  value: Car,
  sizes: SVGSizes
): SVGSVGElement => {
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const XLINK_NS = 'http://www.w3.org/1999/xlink';
  const iconType:string = getProperty(colorIds, value.color);
  const { width, height } = sizes;

  const svg: SVGSVGElement = document.createElementNS(SVG_NS, 'svg');
  svg.id = `car-${value.id}`;
  svg.style.fill = `${value.color}`;
  svg.style.width = width;
  svg.style.height = height;
  svg.style.zIndex = '5';
  svg.classList.add("car-icon");

  const use: SVGUseElement = document.createElementNS(SVG_NS, 'use');
  use.setAttributeNS(XLINK_NS, 'href', `../assets/sprite.svg#car-${iconType}`);

  svg.append(use);
  return svg;
};
