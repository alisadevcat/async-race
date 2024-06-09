import { createBtn } from '../components/createBtn';
import { Car } from '../types/all-types';
import { createCarSVG } from '../components/createCarSvg';
import {removeCarData} from '../views/setEvents';
import { fillModal } from '../components/createModal';

export const createTracksContainer: () => HTMLDivElement = (): HTMLDivElement => {
  let trackContainer: HTMLElement | null = document.getElementById('track-container');
  if (!trackContainer) {
    trackContainer = document.createElement('div');
  }
  trackContainer.classList.add('track-container');
  trackContainer.id = 'track-container';

  return trackContainer as HTMLDivElement;
};

const createBtnStop: (value: Car) => HTMLButtonElement = (value: Car): HTMLButtonElement => {
  const btnStop: HTMLButtonElement = createBtn('B', false, `${value.id}`, 'button-stop', 'stopped');
  return btnStop;
};

const createBtnStart: (value: Car) => HTMLButtonElement = (value: Car): HTMLButtonElement => {
  const btnStart: HTMLButtonElement = createBtn('A', false, `${value.id}`, 'button-start', 'started');
  return btnStart;
};

const createBtnSelect: (value: Car) => HTMLButtonElement = (value: Car): HTMLButtonElement => {
  const btnSelect: HTMLButtonElement = createBtn('Select', false,`${value.id}`, 'button-select');
  btnSelect.addEventListener("click",  ()=>fillModal(value));
  return btnSelect;
};

const createBtnRemove: (value: Car) => HTMLButtonElement = (value: Car): HTMLButtonElement => {
  const btnRemove: HTMLButtonElement = createBtn('Remove', false, `${value.id}`,'button-remove');
  btnRemove.addEventListener("click", removeCarData); 
  return btnRemove;
};

const createTrack: () => HTMLDivElement = (): HTMLDivElement => {
  const track: HTMLDivElement = document.createElement('div');
  track.classList.add('track');
  return track;
};

const createCarName: (value: Car) => HTMLSpanElement = (value: Car): HTMLSpanElement => {
  const carName: HTMLSpanElement = document.createElement('span');
  carName.classList.add('car-name');
  carName.innerText = `${value.name}`;
  return carName;
};

const createFinishImage: (value: Car) => HTMLImageElement = (value: Car): HTMLImageElement => {
  const finish: HTMLImageElement = document.createElement('img');
  finish.classList.add('finish');
  finish.src = './assets/finish.svg';
  finish.alt = 'checkered flag';
  finish.id = `finish-${value.id}`;
  finish.width = 20;
  finish.height = 20;
  return finish;
};

const createControlsContainer: () => HTMLDivElement = (): HTMLDivElement => {
  const controlsContainer: HTMLDivElement = document.createElement('div');
  controlsContainer.classList.add('controls-container');
  return controlsContainer;
};

const createCarContainer: () => HTMLDivElement = (): HTMLDivElement => {
  const carContainer: HTMLDivElement = document.createElement('div');
  carContainer.classList.add('car-container');
  return carContainer;
};

export const createCar: (value: Car) => SVGSVGElement = (value: Car): SVGSVGElement => {
  const svg: SVGSVGElement = createCarSVG(value, { width: `${100}px`, height: `${60}px` });
  return svg;
};

const generateTrack: (car: Car) => HTMLDivElement = (car: Car): HTMLDivElement => {
  const track: HTMLDivElement = createTrack();
  const controlsContainer: HTMLDivElement = createControlsContainer();
  if (controlsContainer) {
    controlsContainer.append(createBtnSelect(car), createBtnRemove(car), createCarName(car));
  }
  const carContainer = createCarContainer();
  if (carContainer) {
    const div1: HTMLDivElement = document.createElement('div');
    div1.classList.add('track-buttons');
    div1.append(createBtnStart(car), createBtnStop(car));
    const div2: HTMLDivElement = document.createElement('div');
    div2.classList.add('track-layout');
    div2.append(createCar(car), createFinishImage(car));
    carContainer.append(div1, div2);
  }
  track.append(controlsContainer, carContainer);

  return track as HTMLDivElement;
};

export const generateAllTracks: (cars: Car[]) => HTMLDivElement = (cars: Car[]): HTMLDivElement => {
  const allTrackGeneration: HTMLDivElement = createTracksContainer();

  if (Array.isArray(cars)) {
    cars?.forEach((item: Car): void => {
      allTrackGeneration.appendChild(generateTrack(item));
    });
  }

  return allTrackGeneration;
};
