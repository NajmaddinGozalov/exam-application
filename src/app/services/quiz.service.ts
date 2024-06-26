import { Injectable } from '@angular/core';
import { QuizOption } from './global.type';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private storageKey = 'quizData';
  
  quizData: QuizOption[] = this.loadFromLocalStorage() || []

  constructor() { }
  getData() {
    return this.quizData;
  }
  addData(item: QuizOption) {
    this.quizData.push(item);
    this.saveToLocalStorage();
  };
  removeData(item: QuizOption) {
    const index = this.quizData.indexOf(item);
    if (index > -1) {
      this.quizData.splice(index, 1);
      this.saveToLocalStorage();
    }
  }
  private saveToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.quizData));
  }
  private loadFromLocalStorage() {
    const quizData = localStorage.getItem(this.storageKey);
    return quizData ? JSON.parse(quizData) : null;
  }
}
