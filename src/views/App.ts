import { CarResponse, Page } from '../types/all-types';
import generateHeader from '../components/header';
import generateGarage from './garage';
import { setEvents } from './setEvents';
import { generateMenu } from './generateMenu';
import getPagination from '../components/pagination';
import getCars from '../api/getCars';
import { createModal } from '../components/createModal';

export const generateSPA: () => Promise<HTMLElement> = async (): Promise<HTMLElement> => {
  const body: HTMLElement | null = document.getElementById('body');
  body?.classList.add('container');
  if (!body) {
    throw new Error("body doesn't exist");
  }

  if (!localStorage.getItem('currentPage')) {
    localStorage.setItem('currenPage', '1');
  }

  const startPage = localStorage.getItem('currenPage');
  const garagePage: Page = 'Garage';
  let carResponse: CarResponse;

  try {
    body.append(generateHeader(), generateMenu());

    carResponse = (await getCars(Number(startPage))) || '[]';

    // localStorage.setItem('cars', JSON.stringify(carResponse.items));

    // console.log(carResponse);
    const cars = carResponse.items;
    const arrOfCars = cars ? cars : [];

    const pagination = getPagination(Number(carResponse.count));

    const paginationContainer = document.createElement('div');
    paginationContainer.id = 'page-pagination-container';
    paginationContainer.appendChild(pagination);
    body.append(createModal());
    body.append(generateGarage(garagePage, arrOfCars, Number(carResponse.count)), paginationContainer);

    setEvents();
  } catch (error) {
    // generateError();
  }

  return body;
};

document.addEventListener('DOMContentLoaded', generateSPA);
