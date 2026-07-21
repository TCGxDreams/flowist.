// Supabase Configuration
// ONLY use your public "anon" key. NEVER use your "service_role" key here.
const SUPABASE_URL = "";
const SUPABASE_KEY = "";

window.SUPABASE_CONFIG = {
  url: SUPABASE_URL,
  key: SUPABASE_KEY
};

if (typeof supabase !== 'undefined' && SUPABASE_URL && SUPABASE_KEY) {
  window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
} else {
  window.supabaseClient = null;
}
