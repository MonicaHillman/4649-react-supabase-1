import "./styles.css";

type CardProps = {
  id: string;
  imagemUrl: string;
  titulo: string;
  resumo: string;
};

export default function Card({ id, imagemUrl, titulo, resumo }: CardProps) {
  return (
    <article className="card" id={id}>
      <div className="card__imagem">
        <img src={imagemUrl} alt="imagem do post" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>

        <div className="conteudo__botoes">
          <button className="botao__editar">Editar</button>
          <button className="botao__deletar">Apagar</button>
        </div>
      </div>
    </article>
  );
}
