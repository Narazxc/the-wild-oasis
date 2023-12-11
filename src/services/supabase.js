import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dhjpelwkgrbqaxumhdmu.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoanBlbHdrZ3JicWF4dW1oZG11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwMzkyMjksImV4cCI6MjAxNTYxNTIyOX0.FjiOAX3J1Uw0naTKQSbaUqFm0wYdhLlgPIoXFjMOFOY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
