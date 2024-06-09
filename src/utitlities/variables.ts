import { Color, colorIDs } from '../types/all-types';

export const COLORS: Color[] = [
  { color: 'Yellow', hash: '#fede00' },
  { color: 'Blue', hash: '#6c779f' },
  { color: 'Red', hash: '#ef3c40' },
  { color: 'White', hash: '#e6e6fa' },
];

export const colorIds: colorIDs = {"#fede00": '1', '#6c779f': '2', '#ef3c40': '3', '#e6e6fa': '4'};
export const garagePerPage = 4;

export const CARS: Array<string> = [
  'Audi',
  'Bentley',
  'BMW',
  'Bollinger',
  'Cadillac',
  'Citroen',
  'Continental',
  'CUPRA',
  'Dacia',
  'Daewoo',
  'Daihatsu',
  'Datsun',
  'Detroit Electric',
  'Ferrari',
  'Fiat',
  'Fisker',
  'Ford',
  'Foxtron',
  'Geely',
  'Genesis',
  'GMC',
  'Great Wall',
  'Haval',
  'Honda',
  'Hummer',
  'Hyundai',
  'Ineos',
  'Infiniti',
  'Iran Khodro',
  'JAC',
  'Jaguar',
  'Jeep',
  'Lada',
  'Lamborghini',
  'Lexus',
  'Maserati',
  'Maybach',
  'Mazda',
  'MCLaren',
  'Mercedes-Benz',
  'MG',
  'MINI',
  'Mitsubishi',
  'Nissan',
  'Opel',
  'Porsche',
  'Range Rover',
  'Renault',
  'Rolls-Royce',
  'Skoda',
  'Tata',
  'Tesla',
  'Toyota',
  'Volkswagen',
  'Volvo'
];

export default CARS;
import { garagePerPage as perPage } from '../utitlities/variables';
export const  pageCount = (totalRecords:number)=> Math.floor(Math.ceil(totalRecords / perPage));