import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../../services/lessons.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LessonOption } from '../../services/global.type';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.scss'
})
export class LessonsComponent implements OnInit {
  data: LessonOption[] = []
  lessonCode: string = '';
  lessonName: string = '';
  classNo: number | null = null;
  teacherName: string = '';
  teacherSurname: string = '';

  constructor(private lessonsService: LessonsService) {

   }
  ngOnInit(): void {
    this.data = this.lessonsService.getData();
  }
  addLesson() {
    const newLesson = {
      lessonCode: this.lessonCode,
      lessonName: this.lessonName,
      classNo: this.classNo,
      teacherName: this.teacherName,
      teacherSurname: this.teacherSurname
    };

    this.lessonsService.addData(newLesson);
    this.data = this.lessonsService.getData(); 
    this.resetForm(); 
  }
  
  removeLesson(lesson: any) {
    this.lessonsService.removeData(lesson);
    this.data = this.lessonsService.getData(); 
  }
  resetForm() {
    this.lessonCode = '';
    this.lessonName = '';
    this.classNo = null;
    this.teacherName = '';
    this.teacherSurname = '';
  }
}
