import styles from "./login.module.css"
import { useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAthentication";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  //Aqui estamos importando o hook com a configuração de autenticação
  const {login,authError, loading} = useAuthentication();

  const handleSubmit = async (e) =>{
    e.preventDefault()

    setError("")

    const user = {
      email,
      password,
    }
    const res = await login(user)
    console.log(res)
  }

  useEffect(() =>{
    if(authError){
      setError(authError)
    }
  },[authError])

  return (
    <div className={styles.login_container}>
      <form onSubmit={handleSubmit} className={styles.container_login}>
      <h1>Login</h1>
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
        {!loading && <button className = "btn" type="submit">Entrar</button> }
        {loading && <button className = "btn" disabled type="submit">Aguarde...</button>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Login