import styles from "../About/about.module.css";

const About = () => {
  return (
    <div className={styles.container_about}>
      <h2>
        Este projeto com feito com React no front-end e Firebase no back-end.
      </h2>

      <table className={styles.container_list}>
        <tr>
          <td>
            Sistema de cadastro de usuários com Authentication do Firebase
            &#x2705;
          </td>
        </tr>
        <tr>
          <td>
            Sistema de login de usuários com validação de email e senha &#x2705;
          </td>
        </tr>
        <tr>
          <td>
            Sistema de busca com useParams e searchParams atraves do React
            &#x2705;
          </td>
        </tr>
        <tr>
          <td>Sistema de validação de rotas com ReactRoutes &#x2705;</td>
        </tr>
        <tr>
          <td>Responsividade &#x2705;</td>
        </tr>
      </table>

      <h2>Informações para contato com Dev:</h2>
      <div className={styles.links_list_contato}>
      <a href="http://linkedin.com/in/gui-web-developer" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-linkedin"></i>
      </a>
      <a href="https://github.com/Gui7F" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-github"></i>
      </a>
      <a href="https://wa.me/5516988287084?text=Olá%20Gui%20Tudo%20bem?" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-whatsapp"></i>
      </a>
      </div>
      
    </div>
  );
};

export default About;
