import { supabase } from '../supabase';
import { Question, Category } from '../../types/quiz';

export const QuizRepository = {
  /**
   * Fetches all active quiz categories for the Home page.
   * This is the "Engine" of your passive income—add categories 
   * in Supabase and they show up here instantly.
   */
  async getCategories(): Promise<Category[]> {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw new Error(error.message);
    return data as Category[];
  },

  /**
   * Fetches questions using the URL slug.
   * SAD Principle: Decouples internal IDs from public-facing URLs.
   */
  async getQuestionsByCategorySlug(slug: string): Promise<Question[]> {
    // Step 1: Find the category ID from the slug
    const { data: category, error: catError } = await supabase
      .from('categories')
      .select('id')
      .eq('slug', slug)
      .single();

    if (catError || !category) throw new Error('Category not found');

    // Step 2: Fetch questions for that ID
    const { data, error } = await supabase
      .from('questions')
      .select('*')
      .eq('category_id', category.id);

    if (error) throw new Error(error.message);
    return data as Question[];
  },

  /**
   * Saves results for analytics and leaderboards.
   */
  async saveResult(score: number, total: number) {
    const { data: { user } } = await supabase.auth.getUser();

    const { error } = await supabase
      .from('quiz_results')
      .insert([
        { 
          user_id: user?.id || null, 
          score: score, 
          total_questions: total,
          completed_at: new Date().toISOString()
        }
      ]);

    if (error) throw error;
  }
};