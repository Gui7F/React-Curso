import { useParams } from "react-router-dom";
import styles from "./post.module.css";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("Posts", id);

  if (loading) {
    return <p>Carregando o post...</p>;
  }

  if (!post) {
    return <p>Post não encontrado.</p>;
  }

  // Se post existe, manipule o corpo do texto
  const textformat = post.body.replace(/<br>/g, "\n");
  const paragrafos = textformat.split("\n");

  return (
    <div className={styles.container_singlepost}>
        <h1>{post.title}</h1>
        <img src={post.image} alt={post.title} />
        {paragrafos.map((paragrafo, index) => (
          <p key={index}>{paragrafo}</p>
        ))}
   
    </div>
  );
};

export default Post;