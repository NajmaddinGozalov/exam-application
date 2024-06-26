export interface LessonOption {
    lessonCode: string;
    lessonName: string;
    classNo: number;
    teacherName: string;
    teacherSurname: string
}
export interface StudentOption {
    studentNo: number;
    studentName: string;
    studentSurname: string;
    classNo: number;
}
export interface QuizOption {
    lessonCode: string;
    studentNo: number;
    quizDate: Date;
    score: string;
}