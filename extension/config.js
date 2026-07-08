// Stash Configuration
// Replace these with your Supabase project details

const CONFIG = {
  // Your Supabase project URL (from Project Settings > API)
  SUPABASE_URL: 'https://aeqltpalalpfxxjucere.supabase.co/rest/v1/',

  // Your Supabase anon/public key (from Project Settings > API)
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlcWx0cGFsYWxwZnh4anVjZXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM1MDEzNTIsImV4cCI6MjA5OTA3NzM1Mn0.8kSJMYMckH1AnS-9jCnSpQ8_Kwe6htaU0Hx-aqIjqtY',

  // Your web app URL (after deploying to Vercel/Netlify)
  WEB_APP_URL: 'https://stash2-0-cajonist17.vercel.app/',

  // Your user ID from Supabase (Authentication > Users)
  // For multi-user mode, this can be removed and auth will be required
  USER_ID: '42f388ab-c17b-44c6-8d6a-c82b656e3e1f',
};

// Don't edit below this line
if (typeof module !== 'undefined') {
  module.exports = CONFIG;
}
