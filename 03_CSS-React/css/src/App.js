import './App.css';
import CSScomponent from './components/CSScomponent';
import Title from './components/Title';

function App() {

  const opcao = false; 

  return (
    <div className="App">
      {/* CSS Global */}
        <h1>React: Estudos de CSS</h1>
        <p>Esse paragrafo é do APP.js</p>


      {/* CSS component */}
      <CSScomponent/>


      {/* CSS classe dinâmica */}
      <h1 className={opcao ? "greentitle" : "graytitle"}>Esse h1 terá classe dinâmica</h1>

      {/* CSS modules */}
      <Title/>
      <h1 className='my_title'>Testando CSS module</h1>
    </div>
  );
}

export default App;
