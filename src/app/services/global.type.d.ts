export interface LessonOption {
    lessonCode: number;
    lessonName: string;
    classNo: number;
    teacherName: string;
    teacherSurname: string
    id: number
}
export interface StudentOption {
    studentNo: number;
    studentName: string;
    studentSurname: string;
    classNo: number;
    id: number
}
export interface QuizOption {
    lessonCode: number;
    studentNo: number;
    quizDate: Date;
    score: string;
}