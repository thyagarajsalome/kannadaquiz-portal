// src/types/quiz.ts

/**
 * Represents a quiz category in the portal.
 */
export interface Category {
  id: string;
  name_kn: string;
  slug: string;
  description?: string;
  created_at?: string;
}

/**
 * Represents a specific quiz question.
 */
export interface Question {
  id: string;
  category_id: string;
  text_kn: string;
  options: string[];
  correct_index: number;
  explanation_kn?: string;
}

/**
 * Represents a Quiz entity.
 */
export interface Quiz {
  id: string;
  title: string;
  description?: string;
  category_id: string;
  created_at: string;
}