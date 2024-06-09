
import { CARS } from '../utitlities/variables';

export function createCarNamesSelect(name?: string) {
    const selectList = document.createElement('select') as HTMLSelectElement;
  
    selectList.classList.add('create-car');

   CARS.forEach((element:string) => {
        const option = document.createElement('option');
        option.value = element;
        option.text = element;
        selectList.appendChild(option);
    });

    if(name){
        selectList.options[selectList.selectedIndex].value = name;
    }

    return selectList;
  }
  