import './styles.scss';

import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <header className="container">
      <div className="c-header">

        <div>
          <img src={logoImg} alt="Logo Fuerza" />
        </div>
        <div>
          <ul className="__menu">
            <li className="menu-item">
              <a href="#">A Empresa</a>
            </li>

            <li className="menu-item">
              <a href="#">Serviços</a>
            </li>

            <li className="menu-item">
              <a href="#">Equipe</a>
            </li>

            <li className="menu-item">
              <a href="#">Galeria</a>
            </li>

            <li className="menu-item">
              <a href="#">Fale Conosco</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
