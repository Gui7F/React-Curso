import styles from "./dashboard.module.css"
import { Link } from "react-router-dom"

//custom hooks, um context com usuário e os posts do usuário virão
// destes hooks aqui assim temos acesso aos dois
import {useAuthContext} from "../../context/AuthContext.js"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"

import { useDeleteDocument } from "../../hooks/useDeleteDocument.js"

const Dashboard = () => {
  const {user} = useAuthContext();
  const uid = user.uid;
  const {documents: post, loading} = useFetchDocuments("Posts", null, uid); 
  
  const { deleteDocument } = useDeleteDocument("Posts");

  
  return (
    <div>
      {loading && <p>Carregando posts...</p>}
      <h2 className={styles.text_table}>Gerencie os posts sobre seus games</h2>
      {post && post.length === 0 ? (
        <div className={styles.nopost}>
          <p>Você ainda não criou nenhum post!</p>
          <Link to="/posts/create" className="btn" >Crie seu primeiro post</Link>
        </div>
      ): (
      <div className={styles.container_dahsboard}>
         <div className={styles.legenda}>
          <span>Posts</span>
          <span>Funções</span>
         </div>

         {post && post.map((post) => 
          <div className={styles.post_line}>
            <img src={post.image} alt={post.title}/>
            <div>      
                <Link  key={post.id} to={`/posts/${post.id}`}>Visualizar</Link>
                <Link  to={`posts/edit/${post.id}`}>Editar</Link>
                <button onClick={() => deleteDocument(post.id)}>Deletar</button>
            </div>
          </div>
        )}
      </div>
      )}
    </div>
  )
}

export default Dashboard
