import "./MyForm.css"
import { useState } from 'react';

const MyForm = ({userDefault}) => {
//   3- Gerenciamento de dados
    const [name, setName] = useState(userDefault? userDefault.name : "") //6- controlled input, seria um valor default para enviar por prop para input
    const [email, setEmail] = useState(userDefault? userDefault.email: "")// para ja deixar algo preenchido por padrão por exemplo

    const [bio, setBio] = useState(userDefault? userDefault.bio: "")
    const [role, setRole] = useState(userDefault? userDefault.role: "")

    function hadleName(e){
        setName(e.target.value);
    }

    const handleSubmit = (e) =>{
      e.preventDefault()  // previne o envio comum que recarrega a página
      console.log("Eviando o formulário"); 
      console.log(name, email, bio, role); // E aqui dentro deste função temos acesso aos dados dos input

      setName("")// Sempre por ultimo podemos deixa o set do state vazio para limpar
      setEmail("")// os inputs, isso é util quando temos que enviar varios dados pelo mesmo formulário
      setBio("")
      setRole("")
    }

    // console.log(name)
    // console.log(email)
  
    return (
    <div>
        {/* 1- Criação do formulário */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome </label>
                <input 
                type="text" 
                name="name" 
                placeholder="Digite seu nome" 
                onChange={hadleName} value={name}/>
            </div>
            {/* 2- Label envolvendo o input */}
            <label>
            {/* 4- simplificaçõa do uso do state em line */}
                <span>Email </span>
                <input 
                type="email"
                 name="email" 
                 placeholder="Digite seu email"  
                 onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            <input type="submit" value='Enviar' />

            <label>
                <span>Bio</span>
                <textarea name="bio"
                 placeholder="Descrição usuário" 
                 onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>

            <label>
                <span>Função</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
        </form>
    </div>
  )
}

export default MyForm

//Quando precisamos manipular o dado ou seja fazer mudanças nas caracteristicas ou quem sabe retirar algum caraceter
//utilizamos a função separa e passamos ela no evento de onChange ja quando precisamos apenas do valor do input
// utilizamos a função em line mesmo como esta no exemplo do email