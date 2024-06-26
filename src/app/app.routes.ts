import { Routes } from '@angular/router';
import { StudentsListComponent } from './component/students-list/students-list.component';
import { LessonsComponent } from './component/lessons/lessons.component';
import { QuizListComponent } from './component/quiz-list/quiz-list.component';

export const routes: Routes = [
   {
      path: 'students',
      component: StudentsListComponent
   },
   {
      path: '',
      component: LessonsComponent
   },
   {
      path: 'quiz',
      component: QuizListComponent
   } 
];
