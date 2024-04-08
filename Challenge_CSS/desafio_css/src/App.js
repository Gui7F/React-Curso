
import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  
  const carros = [{
    id: 1,
    nome: "Ferrari",
    cor: "Vermelha",
    ano: 2014
  },{
    id: 2,
    nome: "Porshe",
    cor: "Prata",
    ano: 2024
  },{
    id: 3,
    nome: "Mustang",
    cor: "Preto",
    ano: 1997
  }]


  return (
    <div className="App">
       <h1 className="desafio_css">Desafio CSS React</h1>

       {carros.map((carro =>(
        <CarDetails 
        key={carro.id}
        nome={carro.nome}
        cor={carro.cor}
        ano={carro.ano} />
       )))}
    </div>
  );
}

export default App;
