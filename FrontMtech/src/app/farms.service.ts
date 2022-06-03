import { Injectable } from '@angular/core';
import { FamrsModel } from './farms.model';


const farms: FamrsModel[] = [
  {
    id: 1,
    no: '100-001',
    name: 'Sunny Vell',
    activeDate: new Date('2020-01-06'),
    address: 'Minnesota',
  },
  {
    id: 2,
    no: '200-001',
    name: 'Mount Calvary',
    activeDate: new Date('2021-12-05'),
    address: 'Texas',
  },
];

@Injectable()
export class Service {
  getFarms() {
    return farms;
  }
}
