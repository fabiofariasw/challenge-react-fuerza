import './styles.scss';
import logoFooter from '../../assets/logo-footer.svg'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container c-footer">
        <span>Todos os direitos reservados</span>
        <img src={logoFooter} alt="" />
      </div>
    </footer>
  )
}
