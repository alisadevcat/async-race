import { CarResponse } from '../types/all-types';
import { garagePerPage as perPage } from '../utitlities/variables';

const getCars = async (pageNumber: number): Promise<CarResponse> => {

const response: Response = await fetch(`http://127.0.0.1:3000/garage?_page=${pageNumber}&_limit=${perPage}`);
const count: string | null = response.headers.get('X-Total-Count');

  if (!count) {
    throw new Error('X-Total-Count is null');
  }

  return {
    items: await response.json(),
    count,
  };
};

export default getCars;