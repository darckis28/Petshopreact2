import image from "../assets/img/doguito.svg";
import "../assets/css/componentes/header.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="header container">
      <div className="menu-hamburguer">
        <span className="menu-hamburguer__icon"></span>
      </div>
      <div className="header-container">
        <Link to="/" className="flex flex--center">
          <img className="header__logo" src={image} alt="doguito" />
          <h1 className="header__title">Petshop</h1>
        </Link>
      </div>
      <nav className="menu-header">
        <ul className="menu-items">
          <li>
            <a className="menu-item menu-item--entrar" href="#">
              Entrar
            </a>
          </li>
          <li>
            <a className="menu-item" href="#">
              Productos
            </a>
          </li>
          <li>
            <Link to="/" className="menu-item" >
              Blog
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="menu-item" >
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
      <div className="menu-header-background"></div>
    </header>
  );
};
