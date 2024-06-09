
import { COLORS } from '../utitlities/variables';
import { createBtn } from '../components/createBtn';
import { createColorSelect } from '../components/createSelect';
import { createCarNamesSelect } from '../components/createCarNamesSelect';

export function generateMenu(): HTMLDivElement {
  const div = document.createElement('div') as HTMLInputElement;
  div.classList.add('menu-container');
  const form = document.createElement('form') as HTMLFormElement;
  form.id = 'form-create-car';
  const nameSelect = createCarNamesSelect();
  const selectList = createColorSelect('choose-car-color', COLORS[0]);
  const btnCreate = createBtn('Create Car', false, '', 'create-btn', '', 'submit');

  const group1 = formGroup(nameSelect, btnCreate,selectList);
  form.append(group1);
  div.append(form);
  return div;
}


function formGroup(nameSelect: HTMLSelectElement, btn: HTMLButtonElement, select?: HTMLSelectElement): HTMLElement {
  const divGroup = document.createElement('div');
  divGroup.classList.add('form-group');
  if (select) {
    divGroup.append(nameSelect, select, btn);
  } else {
    divGroup.append(nameSelect, btn);
  }
  return divGroup;
}
