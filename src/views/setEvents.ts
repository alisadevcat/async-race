import { EmptyReturnFn } from '../types/all-types';
import {
  getButtonProp,
  startDrivingAnimation,
  stopDrivingAnimation,
  addToLocalStorageArray,
} from '../utitlities/helpers';

import CarApi from '../api/carApi';
import updateGaragePage from '../utitlities/update-page';
import updateCar from '../api/updateCar';
import removeCar from '../api/removeCar';

export const setStartStopBtnsListener: EmptyReturnFn = (): void => {
  const startBtn: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button-start');
  const stopBtn: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button-stop');
  if (!startBtn.length || !stopBtn.length) {
    throw new Error("startBtn || stopBtn doesn't exist");
  } else {
    Array.from(startBtn).forEach((item: HTMLButtonElement): void => item.addEventListener('click', ()=>console.log("ffff")));
    Array.from(stopBtn).forEach((item: HTMLButtonElement): void => item.addEventListener('click', drive));
  }
};

export const drive = async (event: Event): Promise<void> => {
  const { target, carId } = getButtonProp(event);
  const status = target.id;
  const responseEngine = (await CarApi.engine('drive', { id: parseInt(carId), status: status })) || '[]';
  if (status == 'started') {
    startDrivingAnimation(responseEngine);
  } else {
    stopDrivingAnimation(responseEngine);
  }
};

const handleCreateForm: EmptyReturnFn = (): void => {
  const form = document.querySelector('#form-create-car');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      postCar();

    });

    const postCar = async (): Promise<void> => {
      const nameSelect = document.querySelector('.create-car') as HTMLSelectElement;
      const name = nameSelect.options[nameSelect.selectedIndex].value;
      const colorSelect = document.querySelector('.choose-car-color') as HTMLSelectElement;
      const selected = colorSelect.options[colorSelect.selectedIndex].value;
      try {
        const car = await CarApi.createCar('car', { name: name, color: selected });
        if (car) {
          addToLocalStorageArray('cars', car);
          updateGaragePage();
        }
      } catch (err) {
        console.log(err);
      }
    };
  }
};

const setRemoveButtonListener: EmptyReturnFn = (): void => {
  const removeBtn: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button-remove');
  Array.from(removeBtn).forEach((item: HTMLButtonElement): void => item.addEventListener('click', removeCarData));
};


export const removeCarData: (event: Event) => Promise<void> = async (event: Event): Promise<void> => {
  const id = (event.target as HTMLButtonElement).value;

  try {
    await removeCar(id);
    updateGaragePage();
  } catch (err) {
    console.log(err);
  }
};




export function updateCarForm(): void {
  const form = document.querySelector('#form-select-car');
  if (form) {
    form.addEventListener('submit', (event: Event) => {
      event.preventDefault();
      updateCarForm();
    });

    const updateCarForm = async (): Promise<void> => {
     
      const idInput = (document.querySelector('#select-car-id') as HTMLInputElement).value;
      const nameSelect = document.querySelector('#select-car-name') as HTMLSelectElement;
      const name = nameSelect.options[nameSelect.selectedIndex].value;
      const colorSelect = document.querySelector('.modal-color-select') as HTMLSelectElement;
      const selected = colorSelect.options[colorSelect.selectedIndex].value;
      const body = { name: name, color: selected };
    
      (document.querySelector('.modal') as HTMLElement).classList.remove('hidden');

      try {
        await updateCar(Number(idInput), body);
        console.log(await updateCar(Number(idInput), { name: name, color: selected }));
        updateGaragePage();
        (document.querySelector('.modal') as HTMLElement).classList.add('hidden');
      } catch (err) {
        console.log(err);
      }
    };
  }
  updateGaragePage();
}

function setEventsForModal(): void {
  const modal = document.querySelector('.modal') as HTMLElement;
  const overlay = document.querySelector('.overlay') as HTMLElement;
  const btnClose = document.querySelector('.btn-close') as HTMLElement;

  const closeModal = function () {
    modal.classList.add('hidden');
  };

  btnClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}

export const setEvents = (): void => {
  try {
    setStartStopBtnsListener();
    handleCreateForm();
    setRemoveButtonListener();
    updateCarForm();
    setEventsForModal();
  } catch (err) {
    console.log(err);
  }
};
