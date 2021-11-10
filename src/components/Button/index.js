import './styles.scss';

import arrowFeather from '../../assets/icon-feather-arrow-right.svg';

export function Button() {
  return (
    <button className="button-primary">
      BUTTON
      <img src={arrowFeather} alt="" />
    </button>
  );
}
