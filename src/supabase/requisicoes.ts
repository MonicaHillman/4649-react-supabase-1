import { supabase } from "./supabaseClient";

export function buscarPostagens() {
  return supabase
    .from("Publicação")
    .select("*")
    .then(({ data, error }) => {
      if (error) {
        console.error("Erro ao buscar postagens", error.message);
        return [];
      }

      return data;
    });
}
