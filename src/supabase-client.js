import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client with your credentials
const supabaseUrl = "https://lkdpgrenrplxbwfvthwv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZHBncmVucnBseGJ3ZnZ0aHd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3Mzg5MjgsImV4cCI6MjA1NDMxNDkyOH0.piKc0vcMph2eHrFzSJP9RVpN9jue5m10LYhffzAjuMk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;