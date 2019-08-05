import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Gender } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const students = [
      { id: 1, name: 'Test Student1', age:  12, gender: Gender.female },
      { id: 2, name: 'Test Student2', age:  14, gender: Gender.male},
      { id: 3, name: 'Test Student3', age:  13, gender: Gender.male }
    ]

    return { students };
  }
}
