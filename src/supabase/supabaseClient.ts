import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://llapqibssiongylqsdgq.supabase.co";
const chaveApi =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsYXBxaWJzc2lvbmd5bHFzZGdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3ODEyNDcsImV4cCI6MjA2MTM1NzI0N30.WDGHxmJEDZOD6uaxn1w-whhMd30X07XhHigrBqZRPVU";

export const supabase = createClient(supabaseUrl, chaveApi);
