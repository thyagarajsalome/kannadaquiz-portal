export interface Question {
  id: string;
  text_kn: string;     // Question text in Kannada
  options: string[];   // Array of 4 options
  correct_index: number;
  explanation_kn?: string; // Why this is the answer
}

export interface QuizSession {
  id: string;
  userId: string;
  score: number;
  startTime: Date;
  isCompleted: boolean;
}