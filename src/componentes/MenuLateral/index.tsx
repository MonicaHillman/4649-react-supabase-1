import { Link } from "react-router-dom";
import Logo from "./assets/Logo.svg";
import Feed from "./assets/feed.svg";
import Account from "./assets/account_circle.svg";
import Info from "./assets/info.svg";
import Logout from "./assets/logout.svg";
import "./styles.css";

export default function MenuLateral() {
  return (
    <aside>
      <img src={Logo} alt="Logo do CodeConnect" />
      <nav>
        <ul className="lista-sidebar">
          <li>
            <Link to="/nova-publicacao" className="item__link-publicacao">
              Publicar
            </Link>
          </li>
          <li>
            <Link to="/" className="item__link item__link--ativo">
              <img src={Feed} alt="" />
              <span>Feed</span>
            </Link>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Account} alt="" />
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Info} alt="" />
              <span>Sobre nós</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Logout} alt="" />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
