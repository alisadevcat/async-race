import { generateAllTracks } from '../views/getTracks';
import { CarResponse, Page } from '../types/all-types';
import { createPageTop } from '../views/garage';
import getCars from '../api/getCars';
// import { pageCount } from './page-count';
import getPagination from '../components/pagination';

const updateGaragePage: () => void = async (): Promise<void> => {
  let carResponse: CarResponse;
  const page = localStorage.getItem('currenPage');
  const garagePage: Page = 'Garage';

  try {
    carResponse = (await getCars(Number(page))) || '[]';
    const cars = carResponse.items;
    const arrOfCars = cars ? carResponse.items : [];
    const parent: HTMLElement | null = document.getElementById('page-garage');
    const tracks = document.querySelector('.track-container');
    if (tracks) {
      parent?.removeChild(tracks);
    }
    parent?.append(generateAllTracks(arrOfCars));
    const parentTop: HTMLElement | null = document.getElementById('page-garage-top');
    const pageTop = document.querySelector('.page-top-container');
    if (pageTop) {
      parentTop?.removeChild(pageTop);
    }
    parentTop?.append(createPageTop(garagePage, Number(page), Number(carResponse.count)));
    const parentPagination: HTMLElement | null = document.getElementById('page-pagination-container');

    const pagination = document.querySelector('.pagination');
    if (pagination) {
      parentPagination?.removeChild(pagination);
    }
    parentPagination?.append(getPagination(Number(carResponse.count)));
  } catch (error) {
    console.log('json data is empty');
  }
};

export default updateGaragePage;
