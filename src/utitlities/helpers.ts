import { EngineResponse, Car } from '../types/all-types';

export const startDrivingAnimation = (value: EngineResponse): void => {
  console.log(value);
};
export const stopDrivingAnimation = (value: EngineResponse): void => {
  console.log(value);
};
export const getButtonProp: { (event: Event): { target: HTMLButtonElement; carId: string } } = (
  event: Event
): {
  target: HTMLButtonElement;
  carId: string;
} => {
  const target: HTMLButtonElement = event.target as HTMLButtonElement;
  const carId = target.value;
  return { target, carId };
};

export const getElementId: (event: Event) => string = (event: Event): string => {
  return (event.target as HTMLElement).id;
};
export const makeButtonsArray = (buttonCount: number) => {
  const arr = [];
  for (let i = 1; i <= buttonCount; i++) {
    arr.push(i);
  }
  return arr;
};

export const addToLocalStorageArray = function (name: string, value: Car) {
  const existing = localStorage.getItem(name);
  const res = existing ? JSON.parse(existing) : [];
  if (res) {
    res.unshift(value);
  }
  localStorage.setItem(name, JSON.stringify(res));
};

export const updateLocalStorageItemInArray = function (name: string, id: string, value: Car) {
  const existing = localStorage.getItem(name);
  let res = existing ? JSON.parse(existing) : [];
  if (res) {
    res = res.map((item: Car) => (item.id === id ? { ...item, ...value } : item));
  }
  console.log(res);
  localStorage.setItem(name, JSON.stringify(res));
  
};

export const removeLocalStorageArray = function (name: string, value: string) {
  const existing = localStorage.getItem(name);
  const res = existing ? JSON.parse(existing) : [];
  if (res) {
    res.filter((item: Car) => item.id !== value);
  }
  console.log(res, 'res');
  localStorage.setItem(name, JSON.stringify(res));
};

export const addToLocalStorageString = function (name: string, value: string) {
  if (localStorage.getItem(name)) {
    localStorage.setItem(name, value);
  }
};
export const setToLocalStorageValue = function (name: string, value: string) {
  if (!localStorage.getItem(name)) {
    localStorage.setItem(name, value);
  }
};
