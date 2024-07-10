import styles from "./createpost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocumen";

const CreatPost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [formError, setFormError] = useState(false);
  const [loading, setLoading] = useState(false)

  //hook de inserção de dados por desustruturação
  const {insertDocument, response} = useInsertDocument("Posts");

  //contexto com valor usuario logado vindo atraves login
  const { user } = useAuthContext();

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validar URL da imagem

    try {
      // tento criar um nova url com dado passa em image a construtora valida para gente
      // se o dado é mesmo uma URL
      new URL(image)

    } catch (error) {
      setFormError("A imagem precisa ser um URL")
    }
    //Criar o array de tags
    
    //Separa cada tag por virgula, apagas os espaços em branco com trim 
    //e tranforma tudo para letra minuscula
    const tagArray = tags.split(",").map((tag) => tag.trim().toLowerCase())


    // Checar todos os valores
    if(formError) return;

    if(!title || !image || !tags || !body ){
      setFormError("Preencha todos os campos, por favor.")
    }

    setLoading(true)
    //Esta objeto é por onde estamo passando os dados do formulario de criação de post
    // para o hook que salva o post no back isso é a comunição atraves de um objeto com
    // cada dado do form
    insertDocument({
      title,
      image,
      body,
      tagArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect para home page
   
    navigate("/")

  };

  return (
    <div>
      <p>
        Crie um post sobre seu game favorito, como foi sua jornada e
        experiências no game
      </p>
      <form className={styles.container_create_post} onSubmit={handleSubmit}>
        <h1>Criar Post</h1>
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
            Criar
          </button>
        )}
        {loading && (
          <button className="btn" disabled type="submit">
            Criando...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default CreatPost;
