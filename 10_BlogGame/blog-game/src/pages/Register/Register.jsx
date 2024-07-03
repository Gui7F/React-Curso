import styles from "./register.module.css";
import { useState } from "react";

const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password,
    }

    if(password  !== confirmPassword) {
      setError("As senhas precisam ser iguais!");
      return
    }

    console.log(user)
  }


  return (
    <div className={styles.container_register}>
      <h1>
        Cadastre-se para criar um post sobre seu game favorito{" "}
        <i className="bi bi-controller"> </i>{" "}
      </h1>
      <p>Compartilhe sua experiência com o seu game favorito!</p>
      <form onSubmit={handleSubmit} styles ={styles.container_form}>
        <label>
           <span>
          Nome:
          </span>
          <input
            type="text"
            name="nome"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
            placeholder="Digite seu nome"
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Digite seu email"
          />
        </label>
        <label>
         <span>Senha:</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
            required
            placeholder="Escolha uma senha"
          />
        </label>
        <label>
          <span> Confirmar senha:</span>
          <input
            type="password"
            name="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirme sua senhas"
          />
        </label>
        <button className = "btn" type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
