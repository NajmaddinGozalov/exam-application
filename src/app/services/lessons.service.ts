import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LessonsService {
     data: {
        lessonCode: string;
        lessonName: string;
        classNo: number;
        teacherName: string;
        teacherSurname: string
    }[] = [{
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

    addData(item: any) {
        this.data.push(item);
    }
}

