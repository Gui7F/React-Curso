//components
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression'
import HierarquiaComp from './components/HierarquiaComp';
import Events from './components/Events';
import FuncaoRender from './components/FuncaoRender';

import './App.css';
import Challenge from './components/Challenge';


function App() {
  return (
    <div className="App">
      <h1>Inicio React!</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <HierarquiaComp/>
      <Events/>
      <FuncaoRender/>
      <Challenge/>
    </div>
  );
}

export default App;

