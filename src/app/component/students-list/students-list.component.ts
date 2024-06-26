import { Component } from '@angular/core';
import { StudentOption } from '../../services/global.type';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss'
})
export class StudentsListComponent {

  studentsData: StudentOption[] = [];

  studentNo: number = null;
  studentName: string = '';
  studentSurname: string = '';
  classNo: number = null;
  constructor(private studentsService: StudentsService) {

  };
  ngOnInit(): void {
    this.studentsData = this.studentsService.getData();
  }
  addStudent() {
    const newStudent = {
      studentNo: this.studentNo,
      studentName: this.studentName,
      studentSurname: this.studentSurname,
      classNo: this.classNo
    };

    this.studentsService.addData(newStudent);
    this.studentsData = this.studentsService.getData(); 
    this.resetForm(); 
  }
  
  removeStudent(lesson: StudentOption) {
    this.studentsService.removeData(lesson);
    this.studentsData = this.studentsService.getData(); 
  }
  resetForm() {
    this.studentNo = null;
    this.studentName = '';
    this.studentSurname = '';
    this.classNo = null;
  }
}
