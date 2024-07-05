import { useAuthentication } from "../../hooks/useAthentication";
import styles from "./register.module.css";
import { useEffect, useState } from "react";

const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  //Aqui estamos importando o hook com a configuração de autenticação
  const {createUser,authError, loading} = useAuthentication();

  const handleSubmit = async (e) =>{
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
    
    const res = await createUser(user)
    console.log(res)
  }

  useEffect(() =>{
    if(authError){
      setError(authError)
    }
  },[authError])


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
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
