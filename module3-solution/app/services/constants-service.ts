import {Injectable} from '@angular/core';

@Injectable()
export class ConstantsService {

API_ENDPOINT :string;

constructor() {
    this.API_ENDPOINT = 'https://davids-restaurant.herokuapp.com';
  }
}