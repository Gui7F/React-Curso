import styles from "./createpost.module.css";

import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const CreatPost = () => {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [body, setBody] = useState();
  const [tags, setTags] = useState();
  const [formError, setFormError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <p>
        Crie um post sobre seu game favorito, como foi sua jornada e
        experiências no game
      </p>
      <form className={styles.container_create_post}>
       <h1>Criar Post</h1>
        <label>Nome:</label>
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
        <button className = "btn" type="submit">Criar</button>
        {/* {!loading && <button className = "btn" type="submit">Cadastrar</button> }
        {loading && <button className = "btn" disabled type="submit">Aguarde...</button>}
        {error && <p className="error">{error}</p>} */}
      </form>
    </div>
  );
};

export default CreatPost;
