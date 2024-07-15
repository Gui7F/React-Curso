import styles from "./editpost.module.css";

import { useEffect, useState } from "react";
import { useNavigate , useParams} from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import {useFetchDocument} from "../../hooks/useFetchDocument";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [formError, setFormError] = useState(false);
  const [loading, setLoading] = useState(false)

  
  const {updateDocument, response} = useUpdateDocument("Posts");

  const { user } = useAuthContext();

  const navigate = useNavigate()

  const {id} = useParams();
  const {document:post } = useFetchDocument("Posts", id);


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    try {
      
      new URL(image)

    } catch (error) {
      setFormError("A imagem precisa ser um URL")
    }
    
    const tagArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

    if(formError) return;

    if(!title || !image || !tags || !body ){
      setFormError("Preencha todos os campos, por favor.")
    }

    setLoading(true)

    const data ={
      title,
      image,
      body,
      tagArray,
      uid: user.uid,
      createdBy: user.displayName,
    }
  
    updateDocument(id, data);

   
    navigate("/dashboard")

  };

  useEffect(() =>{

    if(post) {
     setBody(post.body)
     setTitle(post.title)
     setImage(post.image)
     const textTags = post.tagArray.join(" ,");
     setTags(textTags)
    }
  
   },[post])

  return (
    <div>
     {post && (
      <>
            <p className={styles.text_create_post}>
        Faça edição do post: {post.title}
      </p>
      <form className={styles.container_create_post} onSubmit={handleSubmit}>
        <h1>Editar Post</h1>
        <label>Nome do Jogo:</label>
        <input
          type="text"
          name="nome"
          required
          placeholder="Nome do game"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label>Imagem:</label>
        <input
          type="text"
          required
          placeholder="URL da imagem do game"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <label >Preview da imagem:</label>
        <img src={post.image} alt={post.title} />
        <label>Conteúdo:</label>
        <textarea
          type="text"
          name="conteudo"
          required
          placeholder="Conteúdo do post sobre o game"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
        <label>Tags:</label>
        <input
          type="text"
          required
          placeholder="Coloque as #tags separadas por virgula"
          onChange={(e) => setTags(e.target.value)}
          value={tags}
        />
        {!loading && (
          <button className="btn" type="submit">
            Editar
          </button>
        )}
        {loading && (
          <button className="btn" disabled type="submit">
            Editando...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
      </>
     )}
    </div>
  );
};

export default EditPost;
