
import './App.css';
import Ilha from "./assets/ilha.jpg"
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
         <h1>Avançando React: Fundamentos</h1>
         <div>
          {/*Imagem em pubic */}
          <img src="/astronauta.jpg" alt="astronauta" />
         </div>
         <div>
           {/*Imagem em assets src */}
           <img src={Ilha} alt="ilha flutuante" />
         </div>
         <div>
          <ManageData/>
          <ListRender/>
         </div>
    </div>
  );
}

export default App;
