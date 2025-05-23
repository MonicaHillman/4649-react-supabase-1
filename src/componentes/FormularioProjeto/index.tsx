import { useState, ChangeEvent, FormEvent } from "react";
import "./styles.css";
import { Projeto } from "../../tipagem/Projeto";

type FormularioProjetoProps = {
  projetoInicial?: Projeto;
  onSubmit: (projeto: Projeto) => void;
};

export default function FormularioProjeto({ projetoInicial, onSubmit }: FormularioProjetoProps) {
  const [nome, setNome] = useState(projetoInicial?.nome || "");
  const [descricao, setDescricao] = useState(projetoInicial?.descricao || "");
  const [imagem, setImagem] = useState<File | null>(projetoInicial?.imagem || null);
  const [tags, setTags] = useState<string[]>(projetoInicial?.tags || []);
  const [novaTag, setNovaTag] = useState("");

  function handleImagemChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setImagem(e.target.files[0]);
    }
  }

  function handleAdicionarTag() {
    if (novaTag.trim() !== "" && !tags.includes(novaTag)) {
      setTags([...tags, novaTag.trim()]);
      setNovaTag("");
    }
  }

  function handleRemoverTag(tag: string) {
    setTags(tags.filter(t => t !== tag));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit({ nome, descricao, imagem, tags });
  }

  return (
    <form onSubmit={handleSubmit} className="formulario-projeto">

     <div>
        <div >
        {imagem ? (
          <img src={URL.createObjectURL(imagem)} alt="Preview" className="form-imagem"/>
        ) : 
          (
          <img src="https://picsum.photos/200/300" alt="Imagem padrão" className="form-imagem"/>
          )
          }
          </div>
      

          <label className="upload-label">
  Carregar imagem
  <input type="file" accept="image/*" onChange={handleImagemChange} hidden />
</label>

      </div>


      <div>

<label>
        Nome do projeto

      <input
        type="text"
        placeholder="Nome do projeto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
</label>

      <label>
        Descrição do projeto
      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      </label>

      <label>
        Tags
  
      <input
        type="text"
        placeholder="Adicionar tag"
        value={novaTag}
        onChange={(e) => setNovaTag(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAdicionarTag())}
      />
      </label>

    <div className="tags">
        {tags.map(tag => (
          <span key={tag} className="tag">
            {tag} <button type="button" onClick={() => handleRemoverTag(tag)}>x</button>
          </span>
        ))}
      </div>


      <div className="botoes">
        <button type="button" className="botao-descartar">Descartar</button>
        <button type="submit" className="botao-publicar">
          {projetoInicial ? "Salvar" : "Publicar"}
        </button>
      </div>
      </div>
    </form>
  );
}
