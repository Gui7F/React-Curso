import { useState } from 'react';
import './App.css';
import Ilha from "./assets/ilha.jpg"
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import CondicionalRender from './components/CondicionalRender';
import PropsSimples from './components/PropsSimples';
import PropsDestructring from './components/PropsDestructring';
import Childrenprop from './components/Childrenprop';
import FunçãoinProp from './components/FunçãoinProp';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';
import UserDetails from './components/UserDetails';


function App() {
  //const novoUser = "Luffy" //Pode mandar valores diretos para props
  const [newUser] = useState("Nami") // Podemos tambem mandar valores com state 

  const novaTripulação = [
    {id:1, Capitao: "Steve" , Intermediario: "Tony", Cozinheiro: "Thor", Navegadora:"Wanda"},
    {id:2, Capitao: "Levi" , Intermediario: "Eren", Cozinheiro: "Seito", Navegadora:"Vaino"},
    {id:3, Capitao: "Gunts" , Intermediario: "Dracula", Cozinheiro: "Robin", Navegadora:"Wood"}
  ]
  
  


  function showMessage(){
    console.log('Função ativada')
  }

  const [message, setMessage] = useState("")

  const changeMsg = (msg) =>{
    setMessage(msg)
  }



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
            key={item.id}
            Capitao={item.Capitao} 
            Intermediario={item.Intermediario} 
            Cozinheiro={item.Cozinheiro} 
            Navegadora={item.Navegadora}/>
          ))}

          {/* Children prop é um recurso que serve para criar um container no jsx */}
          {/* Tambem podemos enviar propriedades para container normalmente */}
          <Childrenprop props = "Teste">
            <p>Este é p conteúdo do container</p>
          </Childrenprop>

          {/* Função em props */}
          <FunçãoinProp  showMessage={showMessage}/>

          {/* State Lift */}
          {/* Serve como uma forma de passa valor de um elemento filho para outro, para o elemento pai consumir o valor alterado pelo state */}
          <Message  msg={message}/>
          <ChangeMessage changeMsg = {changeMsg}/>
          <UserDetails/>
         </div>
    </div>
  );
}

export default App;
