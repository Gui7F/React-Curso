import './App.css';
import MyForm from './components/MyForm';


function App() {
  return (
    <div className="App">
      <h2>Forms React</h2>
      <MyForm userDefault={
        {name: "Guilherme" , 
        email: "gui@gmail.com", 
        bio: "Sou rei dos piratas", 
        role:"admin"}}/>
    </div>
  );
}

export default App;
