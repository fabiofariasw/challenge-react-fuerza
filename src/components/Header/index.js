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
              <a href="#" target="_blank">A Empresa</a>
            </li>

            <li className="menu-item">
              <a href="#" target="_blank">Serviços</a>
            </li>

            <li className="menu-item">
              <a href="#" target="_blank">Equipe</a>
            </li>

            <li className="menu-item">
              <a href="#" target="_blank">Galeria</a>
            </li>

            <li className="menu-item">
              <a href="#" target="_blank">Fale Conosco</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
