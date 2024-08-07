import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//library bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";

//Context para validar se o usuário esta logado ou não
import { AuthProvider } from "./context/AuthContext";

//onAuthStateChanfed é uma função interna do firebase que mapea se o usuário foi autenticado com sucesso
import { onAuthStateChanged } from "firebase/auth";
//hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAthentication";
//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import CreatePost from "./pages/CreatePost/CreatePost";
import Dashboard from "./pages/Dashboard/Dashboard";
import Search from "./pages/Search/Search";
import Post from "./pages/Post/Post";
import EditPost from "./pages/EditPost/EditPost";

//componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              {/* Rotas publicas */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search/>}/>
              <Route path ="/posts/:id" element={<Post/>}/>

              {/* Rotas privadas */}
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate to="/login" />}
              />
               <Route
                path="dashboard/posts/edit/:id"
                element={user ? <EditPost/> : <Navigate to="/login" />}
              />
              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
          <div>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
