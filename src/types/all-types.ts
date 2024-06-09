export interface Endpoints{
  createCar: createCarEndpoint;
  engine: EngineEndpoint;
}

export interface CarEndpoint{
  [list:string]: ()=> GeneralEndpointInfo;
}
export interface EngineEndpoint{
  [drive:string]: (options:EngineOptions)=> GeneralEndpointInfo;
}
export interface createCarEndpoint{
  [car:string]: (body: CreateCarBody )=> createCarEndpointInfo;
}

export interface GeneralEndpointInfo{
  method: string;
  resource: string;
  headers?: HeadersInit | undefined;
  body?: BodyInit | null | undefined;
}

export interface createCarEndpointInfo{
  method: string;
  resource: string;
  headers?: HeadersInit | undefined;
  body?: CreateCarBody;
}

export interface CreateCarBody {
  name: string;
  color: string;
}

export type SVGSizes = { width: `${number}px`; height: `${number}px` };

export type Color = {
  color: string, 
  hash: string
}


export type CarOptions = {
  id?: string;
} 

export type EngineOptions = {
  id?: number;
  status?: string
} 

export type CarsResponse = Car[] | string | [];

// response interface
export interface CarResponse {
  items: Car[];
  count: string;
}

export type EngineResponse = { velocity: number, distance: number }| undefined | string;

export function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]; // Inferred type is T[K]
}
export function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  obj[key] = value;
}

export interface Car {
    name: string;
    color: string;
    id: string;
}

export type Winner = {
  "id": number,
  "wins": number,
  "time": number
}

export type Page = 'Garage' | 'Winners';

export interface EmptyReturnFn {
  (): void;
}

export interface EmptyPromiseReturnFn {
  (): Promise<void>;
}

export interface PaginationData {
  perPage: number;
  totalRecords: number;
}

export interface Button {
  class: string, 
  innerText: string,
  disabled?: boolean;
}

export const safeJsonParse = <T>(str: string) => {
  try {
    const jsonValue: T = JSON.parse(str);

    return jsonValue;
  } catch {
    return undefined;
  }
};

export interface colorIDs {
  [key: string]: string;
}