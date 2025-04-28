import { useEffect, useState } from "react";
import FormularioProjeto from "../../componentes/FormularioProjeto";
import { Projeto } from "../../tipagem/Projeto";
import { useParams } from "react-router-dom";
import { buscarPostagemPorId } from "../../supabase/requisicoes";

export default function EditarPublicacao() {
  const [projeto, setProjeto] = useState<Projeto>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      buscarPostagemPorId(id).then((projetoBuscado) => {
        setProjeto(projetoBuscado);
      });
    }
  });

  function atualizarProjeto(projeto: Projeto) {
    console.log("Projeto atualizado:", projeto);
  }

  return (
    <div>
      {projeto ? (
        <FormularioProjeto projetoInicial={projeto} onSubmit={atualizarProjeto} />
      ) : (
        <p>Carregando projeto...</p>
      )}
    </div>
  );
}
