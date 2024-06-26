import { Injectable } from '@angular/core';
import { StudentOption } from './global.type';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private storageKey = 'studentsData';

  studentsData: StudentOption[] = this.loadFromLocalStorage() || []

  constructor() { }
  getData() {
    return this.studentsData;
  }

  addData(item: StudentOption) {
    this.studentsData.push(item);
    this.saveToLocalStorage();
  };
  removeData(item: StudentOption) {
    const index = this.studentsData.indexOf(item);
    if (index > -1) {
      this.studentsData.splice(index, 1);
      this.saveToLocalStorage();
    }
  }
  private saveToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.studentsData));
  }
  private loadFromLocalStorage() {
    const studentsData = localStorage.getItem(this.storageKey);
    return studentsData ? JSON.parse(studentsData) : null;
  }
}
