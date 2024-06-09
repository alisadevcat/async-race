import { createFormInput } from './createInput';
import { Car } from '../types/all-types';
import { createColorSelect } from './createSelect';
import { COLORS } from '../utitlities/variables';
import { createCarNamesSelect } from './createCarNamesSelect';

export const createModal = (): HTMLSelectElement => {
  const section = document.createElement('section') as HTMLSelectElement;
  section.classList.add('modal');
  section.classList.add('hidden');
  const h1 = document.createElement('h1');
  h1.innerText = 'Update car info';
  const divContainer = document.createElement('div');
  divContainer.classList.add('flex');
  const divHeader = document.createElement('div');
  divHeader.classList.add('modal-header');
  const btnClose = document.createElement('button');
  btnClose.classList.add('btn-close');
  btnClose.innerText = 'x';
  const divBody = document.createElement('div');
  divBody.classList.add('modal-body');
  const form = document.createElement('form');
  form.id = 'form-select-car';
  const inputId = createFormInput('select-car-id');
  inputId.classList.add('hidden');
  const divGroup1 = document.createElement('div');
  divGroup1.classList.add('form-select-group');
  const nameSelect = createCarNamesSelect();
  nameSelect.id ='select-car-name';
  divGroup1.append(nameSelect);
  const divGroup2 = document.createElement('div');
  divGroup2.classList.add('form-select-group');
  const inputColor = createColorSelect('modal-color-select', COLORS[0]);
  divGroup2.append(inputColor);
  const divGroup3 = document.createElement('div');
  divGroup3.classList.add('form-select-group');
  const btnClose2 = document.createElement('button');
  btnClose2.classList.add('overlay');
  btnClose2.classList.add('button');
  btnClose2.innerText = 'Submit';
  divGroup3.append(btnClose2)

  form.append(h1,inputId, divGroup1, divGroup2,divGroup3);
  divBody.append(form);
  divHeader.append(btnClose);
  divContainer.append(divHeader, divBody);
  section.append(divContainer);

  return section;
};

export const fillModal = (car: Car): void => {
  const inputId = document.querySelector('#select-car-id') as HTMLInputElement;
  const nameSelect = document.querySelector('#select-car-name') as HTMLSelectElement;
  const selectColor = document.querySelector('.modal-color-select') as HTMLSelectElement;
  inputId.value = car.id;
  nameSelect.options[nameSelect.selectedIndex].value = car.name;
  selectColor.options[selectColor.selectedIndex].value = car.color;
  const colorName = COLORS.filter((item)=>item.hash === car.color)[0].color;
  selectColor.options[selectColor.selectedIndex].text = colorName;
  selectColor.style.backgroundColor = car.color;
  (document.querySelector('.modal') as HTMLElement).classList.remove('hidden');
};
