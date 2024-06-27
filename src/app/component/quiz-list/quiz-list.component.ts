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

  lessonCode: number = null;
  studentNo: number = null
  quizDate: Date = null;
  score: string = '';


  constructor(private quizService: QuizService, private studentService: StudentsService, private lessonService: LessonsService) { };
  ngOnInit(): void {
    this.quizData = this.quizService.getData();
    this.studentData = this.studentService.getData();
    this.lessonData = this.lessonService.getData();


  }
  getStudentName(studentNo: number): { name: string, isNotFound: boolean } {
    const student = this.studentData.find(s => s.id == studentNo);
    return student ? { name: student.studentName + ' ' + student.studentSurname, isNotFound: false } : { name: 'Şagird tapılmadı', isNotFound: true };
  }

  getLessonName(lessonCode: number): { name: string, isNotFound: boolean } {
    const lesson = this.lessonData.find(s => s.id == lessonCode);
    return lesson ? { name: lesson.lessonName, isNotFound: false } : { name: 'Dərs tapılmadı', isNotFound: true };
  }
  getStudentCode(studentNo: number) {
    const student = this.studentData.find(s => s.id == studentNo);
    return student.studentNo
  }
  getLessonCode(lessonCode: number) {
    const lesson = this.lessonData.find(s => s.id == lessonCode);
    return lesson.lessonCode
  }

  addQuiz() {
    const newQuiz = {
      lessonCode: this.lessonCode,
      studentNo: this.studentNo,
      quizDate: this.quizDate,
      score: this.score
    };

    this.quizService.addData(newQuiz);
    this.quizData = this.quizService.getData();
    this.resetForm();
  }

  removeQuiz(quiz: QuizOption) {
    this.quizService.removeData(quiz);
    this.quizData = this.quizService.getData();
  }
  resetForm() {
    this.lessonCode = null;
    this.studentNo = null;
    this.quizDate = null;
    this.score = '';
  }

}
