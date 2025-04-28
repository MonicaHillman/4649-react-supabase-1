import { Projeto } from "../tipagem/Projeto";
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

export function criarPostagem(postagem: Projeto) {
  return supabase
    .from("Publicação")
    .insert([postagem])
    .then(({ data, error }) => {
      if (error) {
        console.error("Erro ao criar uma nova postagem", error.message);
        return null;
      }

      return data;
    });
}
