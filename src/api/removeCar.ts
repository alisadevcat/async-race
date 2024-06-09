// import {removeLocalStorageArray} from '../utitlities/helpers';

const removeCar = async (id: string): Promise<void> => {
 (await fetch(`http://127.0.0.1:3000/garage/${id}`,{ method: 'DELETE'})).json();
 console.log('remove', id)
};

export default removeCar;
