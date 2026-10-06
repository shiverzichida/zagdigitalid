// Supabase client configuration for ZAG Digital
// Handles lead generation, contact submissions, and inquiries
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  company?: string;
  project_type?: string;
  estimated_budget?: string;
  message: string;
  created_at?: string;
}

export async function submitInquiry(data: ContactSubmission) {
  if (!supabase) {
    console.info('Supabase not yet connected. Lead stored locally/console:', data);
    return { success: true, isDemo: true };
  }

  const { error } = await supabase.from('inquiries').insert([data]);
  if (error) {
    console.error('Error submitting inquiry to Supabase:', error);
    throw error;
  }
  return { success: true, isDemo: false };
}
