import { Color, getProperty } from '../types/all-types';
import { COLORS } from '../utitlities/variables';

export function createColorSelect(className:string, selectedColor:Color) {
    const selectList = document.createElement('select') as HTMLSelectElement;
  
    selectList.classList.add(className);
    selectList.addEventListener('change', changeColor);
    selectList.style.backgroundColor = selectedColor.hash;
  
    function changeColor() {
      const e = document.querySelector(`.${className}`) as HTMLSelectElement;
      e.style.backgroundColor = e.options[e.selectedIndex].value;
    }
  
    for (let i = 0; i < COLORS.length; i++) {
      const option = document.createElement('option');
      const name = getProperty(COLORS[i] as Color, 'color');
      const hash = getProperty(COLORS[i] as Color, 'hash');
      option.value = hash;
      option.text = name;
      option.style.color = hash;
      selectList.appendChild(option);
    }
    return selectList;
  }
  