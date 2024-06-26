import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LessonOption, QuizOption, StudentOption } from '../../services/global.type';
import { QuizService } from '../../services/quiz.service';
import { StudentsService } from '../../services/students.service';
import { LessonsService } from '../../services/lessons.service';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.scss'
})
export class QuizListComponent {

  quizData: QuizOption[] = [];
  studentData: StudentOption[] = [];
  lessonData: LessonOption[] = [];

  lessonCode: string = '';
  studentNo: number = null
  quizDate: Date = null;
  score: string = '';

  
  constructor(private quizService: QuizService ,private studentService: StudentsService ,private lessonService: LessonsService) { };
  ngOnInit(): void {
    this.quizData = this.quizService.getData();
    this.studentData = this.studentService.getData();    
    this.lessonData = this.lessonService.getData();  
    console.log(this.lessonData);
      
  }
  getStudentName(studentNo: number): string {
    const student = this.studentData.find(s => s.studentNo == studentNo);
    
    return student ? student.studentName + ' ' + student.studentSurname : 'Şagird tapılmadı';
  }
  getLessonName(lessonNo: string): string {
    const lesson = this.lessonData.find(s => s.lessonCode == lessonNo);
    
    return lesson ? lesson.lessonName  : 'Dərs tapılmadı';
  }
  addQuiz() {
    const newQuiz = {
      lessonCode: this.lessonCode,
      studentNo: this.studentNo,
      quizDate: this.quizDate,
      score: this.score
    };

    this.quizService.addData(newQuiz);
    this.quizData = this.quizService.getData(); // Tabloyu güncelle
    this.resetForm(); // Formu temizle
  }

  removeQuiz(quiz: QuizOption) {
    this.quizService.removeData(quiz);
    this.quizData = this.quizService.getData(); // Tabloyu güncelle
  }
  resetForm() {
    this.lessonCode = '';
    this.studentNo = null;
    this.quizDate = null;
    this.score = '';
  }

}
