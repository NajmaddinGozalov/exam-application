import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuizOption } from '../../services/global.type';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.scss'
})
export class QuizListComponent {
  quizData: QuizOption[] = [];

  lessonCode: string = '';
  studentNo: number = null
  quizDate: Date = null;
  score: string = '';

  constructor(private quizService: QuizService) { };
  ngOnInit(): void {
    this.quizData = this.quizService.getData();
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
