//style
import style from "./search.module.css"

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'

//components
import PostDetail from "../../components/PostDetail"
import { Link } from 'react-router-dom'


const Search = () => {
   
    const query = useQuery()
    const search = query.get("q")
    const {documents: posts} = useFetchDocuments("Posts", search);

  return (
    <div className={style.container_search}>
        <h2 className={style.text_search}>Resultado de busca por :  <span>#</span>{search}</h2>
        <div>
            {posts && posts.length === 0 && (
                <div className={style.container_noresult}>
                    <p>Não foram encontrado posts com esta tag...</p>
                    <Link to="/" className="btn">Voltar</Link>
                </div>
            )} 
            {posts && posts.map((post) => <PostDetail key={post.id} post={post}/>)}
        </div>
    </div>
  )
}

export default Search