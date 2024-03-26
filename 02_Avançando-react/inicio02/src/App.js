import { useState } from 'react';
import './App.css';
import Ilha from "./assets/ilha.jpg"
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import CondicionalRender from './components/CondicionalRender';
import PropsSimples from './components/PropsSimples';
import PropsDestructring from './components/PropsDestructring';

function App() {
  //const novoUser = "Luffy" //Pode mandar valores diretos para props
  const [newUser] = useState("Nami") // Podemos tambem mandar valores com state 

  const novaTripulação = [
    {id:1, Capitao: "Steve" , Intermediario: "Tony", Cozinheiro: "Thor", Navegadora:"Wanda"},
    {id:1, Capitao: "Levi" , Intermediario: "Eren", Cozinheiro: "Seito", Navegadora:"Vaino"},
    {id:1, Capitao: "Gunts" , Intermediario: "Dracula", Cozinheiro: "Robin", Navegadora:"Wood"}
  ]

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
          <CondicionalRender/>
          {/* Props Simples uma propriedade */}
          <PropsSimples  nome = {newUser}/>
          {/* Props Destructring */}
          <PropsDestructring Capitao="Luffy" Intermediario={"Zoro"} Cozinheiro={"Sanji"} Navegadora={"Nami"}/>
          {/* Reaproveitamento de Componente com map */}

          {novaTripulação.map ((item) => (
            <PropsDestructring 
            Capitao={item.Capitao} 
            Intermediario={item.Intermediario} 
            Cozinheiro={item.Cozinheiro} 
            Navegadora={item.Navegadora}/>
          ))}
         </div>
    </div>
  );
}

export default App;
