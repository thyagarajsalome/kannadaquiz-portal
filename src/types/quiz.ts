export interface Category {
  id: string;
  name_kn: string;
  slug: string;
  description?: string;
  created_at?: string;
}

export interface Question {
  id: string;
  category_id: string;
  text_kn: string;
  options: string[];
  correct_index: number;
  explanation_kn?: string;
}