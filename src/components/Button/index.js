import './styles.scss';

import arrowFeather from '../../assets/icon-feather-arrow-right.svg';

export function Button({className}) {
  return (
    <button className={`btn ${className}`}>
      Button
      <img src={arrowFeather} alt="" />
    </button>
  );
}
