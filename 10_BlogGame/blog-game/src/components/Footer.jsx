import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p>Crie posts sobre seus jogos favoritos</p>
        <p>blogGAME &copy;Guilherme Ribeiro</p>
      <div>
      <label>Informações para contato comigo:</label>
      <a href="http://linkedin.com/in/gui-web-developer" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-linkedin"></i>
      </a>
      <a href="https://github.com/Gui7F" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-github"></i>
      </a>
      <a href="https://wa.me/5516988287084?text=Olá%20Gui%20Tudo%20bem?" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-whatsapp"></i>
      </a>
      </div>
    </footer>
  )
}

export default Footer
