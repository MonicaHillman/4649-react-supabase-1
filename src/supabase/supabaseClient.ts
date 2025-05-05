import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "COLOQUE SUA SUPABASE URL";
const chaveApi = "COLOQUE A SUA CHAVE AQUI";

export const supabase = createClient(supabaseUrl, chaveApi);
