import styles from "../Home/home.module.css";
import { Link, useNavigate } from "react-router-dom";

//Lottie animation
import Lottie from "react-lottie";
import animationData from "./Animation/Animation - 1720489137546.json";
//hooks
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

//components
import PostDetail from "../../components/PostDetail";

const Home = () => {
  const [query, setQuery] = useState();
  //States animation lottie
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const navigate = useNavigate()

  //Custom hook para buscar documentos
  const { documents: posts, loading } = useFetchDocuments("Posts");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(query){
      return navigate(`/search?q=${query}`);
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.container_home}>
      <div className={styles.logo_home}>
      <div className={styles.animation}>
        <Lottie
          options={defaultOptions}
          isStopped={isStopped}
          isPaused={isPaused}
        />
      </div>
      <h1>GAMES</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque por tags dos games favoritos"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn" onChange={(e) => setQuery(e.target.value)}>
          <i className="bi bi-search"></i>
        </button>
      </form>
      <div className={styles.post_container}>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => <PostDetail post={post} key={post.id}/>)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não possui posts ainda</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
