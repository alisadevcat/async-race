import { Car , CreateCarBody} from '../types/all-types';

const updateCar = async (id: number, body: CreateCarBody): Promise<Car> => {
   const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return await response.json();
};

export default updateCar;