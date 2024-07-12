import styles from "./dashboard.module.css"
import { Link } from "react-router-dom"

//custom hooks, um context com usuário e os posts do usuário virão
// destes hooks aqui assim temos acesso aos dois
import {useAuthContext} from "../../context/AuthContext.js"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"

const Dashboard = () => {
  const {user} = useAuthContext();
  const uid = user.uid;
  const {documents: post, loading} = useFetchDocuments("Posts", null, uid); 
   
  const deletePost = () =>{

  }
  

  
  return (
    <div>
      {loading && <p>Carregando posts...</p>}
      <h1>Seus Posts</h1>
      <h2>Gerencie os posts sobre seus games</h2>
      {post && post.length === 0  && (
        <div className={styles.nopost}>
          <p>Você ainda não criou nenhum post!</p>
          <Link to="/posts/create" className="btn" >Crie seu primeiro post</Link>
        </div>
      )}

      {post && post.map((post) => (
        <table className={styles.container_table}>
         <thead>
           <tr>
            <td colSpan={3}>Titulos</td>
           </tr>
           <tr>
            <td colSpan={3}>Funções</td>
           </tr>
          </thead> 
          <tbody>
            <tr>
              <td><img src={post.image} alt={post.title} /></td>
            </tr>
            <tr>
              <td><Link to={`/posts/${post.id}`}>Visualizar</Link></td>
              <td><Link to={`posts/edit/${post.id}`}>Editar</Link></td>
              <td><button onClick={() => deletePost()}>Deletar</button></td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  )
}

export default Dashboard
