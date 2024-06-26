import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LessonsService {
    private data: {
        dersKodu: string;
        dersAdi: string;
        sinifNumarasi: number;
        mellimAdi: string;
        mellimSoyadi: string    
    }[] = [];

    constructor() { }

    getData() {
        return this.data;
    }

    addData(item: any) {
        this.data.push(item);
    }
}

