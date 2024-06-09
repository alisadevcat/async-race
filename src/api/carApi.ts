import { Endpoints, EngineResponse, GeneralEndpointInfo, Car, EngineOptions, CreateCarBody, createCarEndpointInfo } from '../types/all-types';

class CarApi {
  endpoints: Endpoints;

  constructor() {
    this.endpoints = {
      createCar: {
        car: (body: CreateCarBody) => {
          return {
            method: 'POST',
            resource: 'garage',
            headers: { 'Content-Type': 'application/json' },
            body: body,
          };
        },
      },
      engine: {
        drive: (options: EngineOptions) => {
          return {
            method: 'PATCH',
            resource: `engine?id=${options.id}&status=${options.status}`,
            body: undefined,
          };
        },
      },
    };
  }


  engine(method: string = '', options: EngineOptions) {
    const existingEndpoint = this.endpoints.engine[method];
    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      return this.requestEngine(endpoint);
    }
  }

  createCar(method: string = '', body: CreateCarBody){
    const existingEndpoint = this.endpoints.createCar[method];
    if (existingEndpoint) {
      const endpoint = existingEndpoint(body);
      return this.requestCreateCars(endpoint);
    }
  }


  async requestEngine(endpoint: GeneralEndpointInfo): Promise<EngineResponse | string> {
    const response = await fetch(`http://127.0.0.1:3000/${endpoint.resource}`, {
      method: endpoint.method,
      headers: endpoint?.headers,
      body: endpoint?.body ? JSON.stringify(endpoint.body) : null,
    });

    if (!response.ok) {
      throw new Error('Ответ сети был не ok.');
    }

    return await response.json();
  }

  async requestCreateCars(endpoint: createCarEndpointInfo): Promise<Car> {
    const response = await fetch(`http://127.0.0.1:3000/${endpoint.resource}`, {
      method: endpoint.method,
      headers: endpoint?.headers,
      body: endpoint?.body ? JSON.stringify(endpoint.body) : null,
    });

    if (!response.ok) {
      throw new Error('Ответ сети был не ok.');
    }

    return await response.json();
  }
}

export default new CarApi();
