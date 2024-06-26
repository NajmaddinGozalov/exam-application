import { Injectable } from '@angular/core';
import { LessonOption } from './global.type';

@Injectable({
    providedIn: 'root'
})

export class LessonsService {

    private storageKey = 'lessonsData';
    
    data: LessonOption[] = this.loadFromLocalStorage() || [{
        lessonCode: '596',
        lessonName: 'tarix',
        classNo: 5,
        teacherName: 'Kenan',
        teacherSurname: 'Kenanov'
    }];

    constructor() {

    }

    getData() {
        return this.data;
    }

    addData(item: LessonOption) {
        this.data.push(item);
        this.saveToLocalStorage();
    };
    removeData(item: LessonOption) {
        const index = this.data.indexOf(item);
        if (index > -1) {
            this.data.splice(index, 1);
            this.saveToLocalStorage();
        }
    }
    private saveToLocalStorage() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    }
    private loadFromLocalStorage() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : null;
    }
}

