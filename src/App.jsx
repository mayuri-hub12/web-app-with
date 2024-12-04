import FoodList from "./FoodLIst.jsx"
import './App.css'
import CounterButton from "./CounterButton.jsx";

function App() {
  // let foodListarray=[];
  
  return (<>
  
  <h1 id="head">MENU</h1>
  <FoodList foodListarray={foodListarray} />
  <h1>Refreshment Drinks</h1>
  <p>cold drinks</p>
  <CounterButton></CounterButton>
  </>);
   
}

export default App
