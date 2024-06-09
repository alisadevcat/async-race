import {createBtn} from './createBtn';

const createHeader: () => HTMLElement = (): HTMLElement => {
  const header: HTMLElement = document.createElement('header');
  header.classList.add('header');
  return header;
};

const createNav: () => HTMLElement = (): HTMLElement => {
  const nav: HTMLElement = document.createElement('nav');
  nav.classList.add('nav');
  return nav;
};


const generateHeader: () => HTMLElement = (): HTMLElement => {
  const header: HTMLElement = createHeader();
  const nav: HTMLElement = createNav();

  nav.append(createBtn('GARAGE', false,  'garage_link'));

  header.append(nav);
  return header;
};

export default generateHeader;
